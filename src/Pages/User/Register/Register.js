import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";                //importing required artifacts from firebase
import { db } from '../../../firebase';            //importing database from our firebase config
import { collection, addDoc } from "firebase/firestore";               //importing required artifacts from firebase
import { useState} from 'react';            //importing required artifacts from react


function Register() {
    const [password, setPassword] = useState('');       //state to store password
    const [email, setEmail] = useState('');             //state to store email address
    let Id = {IsValid:false,DateOfBirth:"", Gender:"", Citizenship:"", Race:0,checksum:"",IdNumber:""}; // standard format of an Id field
    const Setemail = event => {             //handles setting email state
        setEmail(event.target.value);}
    const Setpassword = event => {              //handles setting password state
        setPassword(event.target.value);}

    const auth = getAuth();
    const OnSignup = () => {            //handles entire sign up process
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                /* -- successfully created a user -- */
                const user = userCredential.user;
                /*
                Initialize an idMetaData field with unique id (SaveId)
                1. insert into IdMetaData table using the unique id
                2. use email as id and save the object into IdMetaData table
                */
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(error);                    //temporary to show error message
            });
    }

    return (
        <div>
            <text>Varify and Validate Your Id number</text><br/>
            <input type="email" placeholder="Email" onChange={Setemail}></input><br/>
            <input type="password" placeholder="Password" onChange={Setpassword}></input><br/>
            <button >Login</button><br/>
            <button onClick={OnSignup} >Sign-in with Google</button>
        </div>
    );
}

export default Register;