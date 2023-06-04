import { doc, setDoc } from "firebase/firestore";
import { db } from '../../../firebase';            //importing database from our firebase config

/*
    UpdateId takes the IdMetaData
    1.Updates in the database
    2. use email as reference
*/

function UpdateId(props,email) {
    const addToDatabase = async () => {                            //handles adding an item to database
        await setDoc(doc(db, "IdMetaData", email), {
            props
        });
    }
}
export default UpdateId;