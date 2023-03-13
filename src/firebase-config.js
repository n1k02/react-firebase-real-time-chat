// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, onAuthStateChanged} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {store} from "./store/index.js";
import {useEffect} from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWK40dLtKItf60sPWPfFZtFYzgIe1ixZ4",
    authDomain: "real-time-chat-react-firebase.firebaseapp.com",
    projectId: "real-time-chat-react-firebase",
    storageBucket: "real-time-chat-react-firebase.appspot.com",
    messagingSenderId: "801039385784",
    appId: "1:801039385784:web:87479ba9d7514bca60e04d",
    measurementId: "G-0X8QC37CJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

const {setUserData} = store;

onAuthStateChanged(auth, ()=> {
    setUserData(auth)
})


