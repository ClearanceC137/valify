// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {

  apiKey: "AIzaSyCPbAsoYZoODGHFUz2xH-2oQdRUYFFkLjE",

  authDomain: "valify-7739a.firebaseapp.com",

  projectId: "valify-7739a",

  storageBucket: "valify-7739a.appspot.com",

  messagingSenderId: "798029436897",

  appId: "1:798029436897:web:e2958c8095ef3e125fe4a0",

  measurementId: "G-QPRSRE3SSS"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const storage = getStorage(app);

export function signupmethod(email, password) {         //function used to sign up new user on database
    return createUserWithEmailAndPassword(auth, email, password)
}
export function loginmethod(email, password) {              //function used to login an exiting user on database
    return signInWithEmailAndPassword(auth, email, password)
}

export const db = getFirestore(app);

