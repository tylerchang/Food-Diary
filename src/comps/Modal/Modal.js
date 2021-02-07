import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import {projectFirestore} from '../../firebase/config';
import styles from './Modal.module.css';


const Modal = (props) => {

    const [information, setInformation] = useState({
        name: null,
        where: null,
        date: null,
        price: null,
        rating: null,
        description: null
    });

    const handleClick = (e) => {
        //so that it wont close when clicking on the image itself
        if (e.target.classList.contains(styles.Backdrop)) {
            props.setSelectedImage(null);
        }
    }
    useEffect(()=> {
        getDocByURL(props.selectedImage);
        
        async function getDocByURL(url){
            const query = await projectFirestore.collection('images').where('url', '==', url).get();
    
            if (!query.empty) {
                const snapshot = query.docs[0];
                const data = snapshot.data();
                setInformation({name: data.name, where: data.where, date: data.date, price: data.price, rating: data.rating, description: data.description})
              } else {
                alert("Couldn't Find Image!");
              }
        }
    },[props.selectedImage])
    
    

    return(
        <motion.div className={styles.Backdrop} 
            onClick={handleClick}
            initial={{opacity:0}}
            animate={{opacity:1}}
        > 
            <div className={styles.Panel}>
                    <motion.img 
                        src={props.selectedImage} 
                        className={styles.Image}
                        alt="enlarged pic"
                        initial={{y: "-100vh"}}
                        animate={{y:0}}
                    />
                    <div className={styles.InformationPanel}>
                        {Object.keys(information).map(key => {
                            if(key!=="rating"){
                                return(
                                    <div className={styles.DataField} key={Math.random()}> {information[key]} </div>
                                );
                            }else{
                                return(
                                    <div className={styles.DataField} key={Math.random()}> {information[key]}/10 </div>
                                );
                            }
                            
                        })}

                    </div>
            </div>
                
        </motion.div>
    )
}

export default Modal;