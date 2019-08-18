import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const  firebaseConfig = {
    apiKey: "AIzaSyD6SJV1oKTc99LmukYliWCY5290nFHHY_g",
    authDomain: "qsr3-1320b.firebaseapp.com",
    databaseURL: "https://qsr3-1320b.firebaseio.com",
    projectId: "qsr3-1320b",
    storageBucket: "qsr3-1320b.appspot.com",
    messagingSenderId: "1001063036737",
    appId: "1:1001063036737:web:816933a97d175917"
  };

export const fb = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();




