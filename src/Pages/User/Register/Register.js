import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";                //importing required artifacts from firebase
import { db } from '../../firebase';            //importing database from our firebase config
import { collection, addDoc } from "firebase/firestore";               //importing required artifacts from firebase
import { useState} from 'react';            //importing required artifacts from react


function Register() {
    const [password, setPassword] = useState('');       //state to store password
    const [email, setEmail] = useState('');             //state to store email address

    const Setemail = event => {             //handles setting email state
        setEmail(event.target.value);}
    const Setpassword = event => {              //handles setting password state
        setPassword(event.target.value);}

    const auth = getAuth();
    const OnSignup = () => {            //handles entire sign up process
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(error);                    //temporary to show error message
            });
    }
    const addressRef = collection(db, "Users");                        //reference to the user collection
    const addDetails = async () => {                            //handles adding an item to database
        await addDoc(addressRef, { Email: email })
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