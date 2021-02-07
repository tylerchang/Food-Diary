import React, { useState } from 'react';
import styles from './Auth.module.css';
import {auth} from '../../firebase/config';

const Auth = (props) => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const loginUser = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("Signed In!");
                props.setIsLoggedIn(true);
                props.setShowUploadWindow(true);
            })
            .catch((error) => {
                alert("Invalid Login!")
            });
    }

    
    return(
        <div>
            <input type="text" placeholder="Email" className={styles.Email} value={email} onChange={(event)=>{setEmail(event.target.value)}} />
            <input type="password" placeholder="Password" className={styles.Password} value={password} onChange={(event)=>{setPassword(event.target.value)}} />
            <button onClick={loginUser} className={styles.LoginButton}> Login </button>
        </div>
    );    
}

export default Auth;
