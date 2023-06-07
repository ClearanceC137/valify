import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';            //importing database from our firebase config

/*
    SaveId takes the IdMetaData
    1. save it into the database using setDoc to specify key
    2. use email as the key
    props.Id is argument
*/
function SavedId(email) {

    const addToDatabase = async () => {                            //handles adding an item to database
        await setDoc(doc(db, "IdMetaData", email), {
            IsValid:false,DateOfBirth:"", Gender:"", Citizenship:"", Race:"",Checksum:"",IdNumber:""
        });
    }
    addToDatabase();
}
export default SavedId;