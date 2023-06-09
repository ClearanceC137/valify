import { useState ,useContext } from 'react';            //importing required artifacts from react
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";            //importing required artifacts from firebase
import { EmailContext } from '../../../context';           //importing global email context for user logged in
import { useNavigate } from 'react-router-dom';             //importing required artifacts from react-router-dom
import "../Register/Register.css";
import "./Login.css";
function Login() {
    let navigate = useNavigate();               //navigator used to navigate between pages
    const auth = getAuth();
    const [email,setEmail] = useState('');          //email state
    const [password,setPassword] = useState('');            //password state
    const { userEmail, setUserEmail } = useContext(EmailContext);           //global state to be set to user after successful login
    const routeHome = () => {             //routes to the landing page
        navigate('/Home',{ state: { email: email}});           //passes state of user logged in
    }
    const routeRegister = () => {             //routes to the landing page
        navigate('/register');           //passes state of user logged in
    }
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
                setUserEmail(email);
                routeHome();
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
        setEmail(event.target.value);}

    const Setpassword = event => {              //handles setting password state
        setPassword(event.target.value);}

    return (
        <div className='centre'>
            <h1 className="logo">VALIFY</h1>
            <button  className='registerHere' onClick={routeRegister} >New To Valify? Sign Up Here</button>
            <input className='input' type="email" placeholder="Email" onChange={Setemail}></input>
            <input className='input' type="password" placeholder="Password" onChange={Setpassword}></input>
            <button className='button'  onClick={OnLogin}>Login</button>
        </div>
    );
}

export default Login;