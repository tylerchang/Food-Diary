import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timestamp} from '../firebase/config';

const useStorage = (file, name, where, rating, price, date, description) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    //Will run everytime "file" changes
    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images');
        
        //upload phase
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url: url, createdAt: createdAt, name:name, where:where, price:price, rating:rating, date:date, description:description })
            setUrl(url)
        })
    }, [file, name, where, rating, price, date, description]);

    return {progress, url, error}
}

export default useStorage;