import { EmailContext } from '../../context';           //importing global email context for user logged in
import { useState ,useContext,useEffect } from 'react';            //importing required artifacts from react
import CreateId from '../../Functions/CreateId';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase';            //importing database from our firebase config
import UpdateId from "../../Functions/UpdateId";
import ValidateId from '../../Functions/ValidateId';
function Home() {
    const { userEmail, setUserEmail } = useContext(EmailContext);           //global state to be set to user after successful login
    const [Render,setRender] = useState(null);            //User to render metadata of the Id
    const [RawId,setRawId] = useState('');            //password state
    const [Id,setId] = useState({});            //password state
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
                alert("Id Is Valid");
            }
       }else{
            //Id is invalid input
            alert("Id is Invalid input");
       }
    }
    const docRef = doc(db, "IdMetaData", userEmail);    //  Object reference inside database

    useEffect(() => {
        /* -- fetches the id object from database -- */
        const RetrieveDoc = async () => {
            const docSnap = await getDoc(docRef);
            setId(docSnap.data());
            setRender(Id.IsValid);
        }
        RetrieveDoc();
      }, []);

    const InputId = event => {         //handles setting RawId state
        setRawId(event.target.value);}  //
    return (
        <div>
           <text>Home Page</text><br/>
           <input placeholder="Id" onChange={InputId}></input><br/>
            <button onClick={OnValidate}>Validate</button>
        </div>
    );
}

export default Home;