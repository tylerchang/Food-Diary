import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';

const ProgressBar = ({setReady, clearAllFields, file, setFile, name, where, price, rating, date, description}) => {

    const {url, progress} = useStorage(file, name, where, rating, price, date, description);

    useEffect(() => {
        if(url){
            setFile(null);
            clearAllFields();
        }
    }, [url, setFile, setReady, clearAllFields])
    return(
        <motion.div className="progress-bar"
            initial={{width:0}}
            animate={{width: progress + '%'}}> 
        
        </motion.div>
    )
}

export default ProgressBar