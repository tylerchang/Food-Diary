import React, { useState } from 'react';
import UploadForm from '../UploadForm';
import styles from './UploadWindow.module.css';


const UploadWindow = (props) => {
    
    const [name, setName] = useState("");
    const [where, setWhere] = useState("");
    const [rating, setRating] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [ready, setReady] = useState(false);
 

    const readyHandler = () => {
            setReady(true);
    }

    const clearAllFields = () => {
        setName("");
        setWhere("");
        setRating("");
        setPrice("");
        setDate("");
        setDescription("");
        setReady("");
    }

    return(
        <div className={styles.UploadWindow}>

                <input type="text" placeholder="Food Name" value={name} onChange={(event)=>{setName(event.target.value)}}/>
                <input type="text" placeholder="Where" value={where} onChange={(event)=>{setWhere(event.target.value)}}/>
                <input type="date" placeholder="Date" value={date} onChange={(event)=>{setDate(event.target.value)}}/>
                <input type="text" placeholder="Price" value={price} onChange={(event)=>{setPrice(event.target.value)}}/>
                <input type="text" placeholder="Rating (out of 10)" value={rating} onChange={(event)=>{setRating(event.target.value)}}/>
                <input type="text" placeholder="Description" value={description} onChange={(event)=>{setDescription(event.target.value)}}/>
                <UploadForm ready={ready} setReady={setReady} clearAllFields={clearAllFields} name={name} where={where} rating={rating} price={price} date={date} description={description} />
                
                <button className={styles.UploadButton} onClick={readyHandler}> Submit </button>
               
                <button className={styles.XButton}onClick={()=>{props.setShowUploadWindow(false)}}> X </button>
        </div>
    )
}

export default UploadWindow;