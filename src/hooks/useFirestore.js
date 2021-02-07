import {useState, useEffect} from 'react';
import {projectFirestore} from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        //first time calling it will give snapshot of current database, anytime the database updates, it will give snapshot again aka realtime listening!!!
        //this whole thing returns a function after all the operations are done. This function unsubs from the collection
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                });
                setDocs(documents);
            });
        //unsub when we are no longer using the collection
        return () => unsub();
    }, [collection])

    return {docs};
}

export default useFirestore;