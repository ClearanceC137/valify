import { EmailContext } from '../../context';           //importing global email context for user logged in
import { useState ,useContext,useEffect } from 'react';            //importing required artifacts from react
import CreateId from '../../Functions/CreateId';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase';            //importing database from our firebase config
function Home() {
    const { userEmail, setUserEmail } = useContext(EmailContext);           //global state to be set to user after successful login
    const [isValid,setIsValid] = useState(false);            //password state
    const [RawId,setRawId] = useState('');            //password state
    const [Id,setId] = useState({});            //password state
    const OnValidate = () => {
        /*
        To validate Id it has to pass two stages
        1. Check length of id and check if it does not have character(set meta data as well of id object)
        2. Validate using luhn algorithm
        */
       Id.IdNumber = RawId;
       

    }
    const docRef = doc(db, "IdMetaData", userEmail);    //  Object reference inside database

    useEffect(() => {
        /* -- fetches the id object from database -- */
        const RetrieveDoc = async () => {                            
            const docSnap = await getDoc(docRef); 
            setId(docSnap.data().Id);
            setIsValid(docSnap.data().Id.IsValid);

        }
        RetrieveDoc();
      }, []);

    const InputId = event => {         //handles setting RawId state
        setRawId(event.target.value);}
    return (
        <div>
           <text>Home Page</text><br/>
           <input placeholder="Id" onChange={InputId}></input><br/>
            <button >Validate</button>
        </div>
    );
}

export default Home;