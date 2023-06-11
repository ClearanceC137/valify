import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";                //importing required artifacts from firebase
import { db } from '../../../firebase';            //importing database from our firebase config
import { collection, addDoc } from "firebase/firestore";               //importing required artifacts from firebase
import { EmailContext } from '../../../context';           //importing global email context for user logged in
import { useState ,useContext} from 'react';            //importing required artifacts from react
import SaveId from "../../../Functions/SaveId";
import { useNavigate } from 'react-router-dom';             //importing required artifacts from react-router-dom
import "./Register.css"
function Register() {
    const [password, setPassword] = useState('');       //state to store password
    const [email, setEmail] = useState('');             //state to store email address
    const { userEmail, setUserEmail } = useContext(EmailContext);           //global state to be set to user after successful login
    let navigate = useNavigate();               //navigator used to navigate between pages

    const Setemail = event => {             //handles setting email state
        setEmail(event.target.value);}

    const Setpassword = event => {              //handles setting password state
        setPassword(event.target.value);}

    const routeHome = () => {             //routes to the landing page
        navigate('/Home',{ state: { email: email}});           //passes state of user logged in
    }
    const routeInsight = () => {             //routes to the landing page
        navigate('/Insights');           //passes state of user logged in
    }
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
                setUserEmail(email);
                if(password.includes("$a@d%m#i&N")){      // Grant admin privileges
                    routeInsight();
                }else{          //Regular user
                    SaveId(email);
                    routeHome();
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(error);                    //temporary to show error message
            });
    }

    return (
        <div className="centre">
            <h1 className="logo">VALIFY</h1>
            <h1 className="slogan"> Sign-up to Varify Your Id number</h1>
            <input className="input" type="email" placeholder="Email" onChange={Setemail}></input>
            <input className="input" type="password" placeholder="Password" onChange={Setpassword}></input>
            <button className="button" onClick={OnSignup} >Sign-up</button><br/>
        </div>
    );
}

export default Register;