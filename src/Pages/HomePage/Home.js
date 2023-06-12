import { EmailContext } from '../../context';           //importing global email context for user logged in
import { useState ,useContext,useEffect } from 'react';            //importing required artifacts from react
import CreateId from '../../Functions/CreateId';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase';            //importing database from our firebase config
import UpdateId from "../../Functions/UpdateId";
import ValidateId from '../../Functions/ValidateId';
import DisplayId from '../../Components/DisplayId/DisplayId';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Home.css';
import Loader from '../../Components/Loader/Loader';
function Home() {
    const { userEmail, setUserEmail } = useContext(EmailContext);           //global state to be set to user after successful login
    const [Render,setRender] = useState(false);            //User to render metadata of the Id
    const [RawId,setRawId] = useState('');            //password state
    const [Id,setId] = useState({});            //password state
    const [Isloading,setIsloading] = useState(true);            // To render Loading component
    const OnValidate = () => {
        /*
        To validate Id it has to pass two stages
        1. Check length of id and check if it does not have character(set meta data as well of id object)
        2. Validate using luhn algorithm
        */
       Id.IdNumber = RawId;
       if(CreateId(Id).IsValid){
            setId(CreateId(Id));
            if(ValidateId(Id)){
                UpdateId(Id,userEmail);
                setRender(true);
            }else{
                alert("Id Failed Validation");
            }
       }else{
            //Id is invalid input
            alert("Id is Invalid input");
       }
    }
    function DisplayInput(){
        return(
            <div>
                <input className='id-input' placeholder="Id" onChange={InputId}></input><br/>
                <button  className='validate-button' onClick={OnValidate}>Validate</button>
            </div>
        )
    }
    const docRef = doc(db, "IdMetaData", userEmail);    //  Object reference inside database

    useEffect(() => {
        /* -- fetches the id object from database -- */
        const RetrieveDoc = async () => {
            const docSnap = await getDoc(docRef);
            setId(docSnap.data());
            setRender(docSnap.data().IsValid);
        }
        RetrieveDoc();
      }, []);
      useEffect(() => {
        const timer = setTimeout(() => {
          // Code to be executed after the specified time in seconds
          setIsloading(false);
        }, 5000); // 5000 milliseconds = 5 seconds

        // Cleanup function to clear the timer if the component unmounts
        return () => clearTimeout(timer);
      }, []);
    const InputId = event => {         //handles setting RawId state
        setRawId(event.target.value);}  //
    return (

        <div><Header/>
            { Isloading ?  <Loader/>:
            <div className='items'>
                {Render? <h1 className='status'>Your Id is valid</h1> : <h1 className='status'>Please Enter a valid Id</h1>}
                {Render? DisplayId(Id) : DisplayInput()}
            </div>}
            <Footer/>
        </div>
    );
}
export default Home;