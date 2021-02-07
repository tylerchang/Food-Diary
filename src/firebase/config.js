import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCugg4KZTDLD3Bc4gc006k-hU-KKYICgbA",
    authDomain: "photo-gallery-fbc80.firebaseapp.com",
    projectId: "photo-gallery-fbc80",
    storageBucket: "photo-gallery-fbc80.appspot.com",
    messagingSenderId: "316390897418",
    appId: "1:316390897418:web:e4824411d7b409f24becf3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const auth = firebase.auth();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, auth, timestamp};