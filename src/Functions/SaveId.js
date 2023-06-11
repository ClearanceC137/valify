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
            IsValid:false,DateOfBirth:"000000", Gender:"0000", Citizenship:"0", Race:"0",Checksum:"0",IdNumber:"0000000000000"
        });
    }
    addToDatabase();
}
export default SavedId;