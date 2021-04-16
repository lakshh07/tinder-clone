import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBC1OOXC8n8kOGyLoTlW652IFamne3lixk",
    authDomain: "tinder-clone-ca161.firebaseapp.com",
    projectId: "tinder-clone-ca161",
    storageBucket: "tinder-clone-ca161.appspot.com",
    messagingSenderId: "811303435608",
    appId: "1:811303435608:web:c4de0d2dfb237b22c3792d",
    measurementId: "G-MYWDYXDC5W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;