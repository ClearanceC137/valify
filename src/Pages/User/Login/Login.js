import { useState} from 'react';            //importing required artifacts from react
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";            //importing required artifacts from firebase
function Login() {
    const auth = getAuth();
    const [email,setEmail] = useState('');          //email state
    const [password,setPassword] = useState('');            //password state
    const OnLogin = () => {
        //send a function to the database to check if log the user in

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                /* -- Successfully Signed in  -- */
                //const user = userCredential.user;
                /*
                Fetch the idMetaData which belongs to this user (FetchId)
                1. use email as id
                */
            })
            .catch((error) => {
                // failed to sign in
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }
                else {
                    alert(errorMessage);
                }
            });
    }
    const Setemail = event => {         //handles setting email state
        setEmail(event.target.value);
    }
    const Setpassword = event => {              //handles setting password state
        setPassword(event.target.value);
    }
    return (
        <div>
            <input type="email" onChange={Setemail} ></input><br/>
            <input type="password" onChange={Setpassword}></input><br/>
            <button  onClick={OnLogin}>Login</button><br/>
            <button >New To Lion? Sign Up Here</button><br />
        </div>
    );
}

export default Login;