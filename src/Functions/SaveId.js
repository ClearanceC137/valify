import { doc, setDoc } from "firebase/firestore";
import { db } from '../../../firebase';            //importing database from our firebase config

/*
    SaveId takes the IdMetaData
    1. save it into the database using setDoc to specify key
    2. use email as the key
    props.Id is argument
*/
function SavedId(props,email) {
    let Id = {IsValid:false,DateOfBirth:"", Gender:"", Citizenship:"", Race:0,checksum:"",IdNumber:""};
    const addToDatabase = async () => {                            //handles adding an item to database
        await setDoc(doc(db, "IdMetaData", email), {
            Id
        });
    }
}
export default SavedId;