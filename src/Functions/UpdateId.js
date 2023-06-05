import { doc, setDoc ,updateDoc } from "firebase/firestore";
import { db } from '../firebase';            //importing database from our firebase config

/*
    UpdateId takes the IdMetaData
    1.Updates in the database
    2. use email as reference
*/

function UpdateId(props,email) {
    const UpdateDatabase = async () => {                            //handles updating an item to database
        await updateDoc(doc(db, "IdMetaData", email), {
            props
        });
    }
    UpdateDatabase();
}
export default UpdateId;