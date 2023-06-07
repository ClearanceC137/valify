import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';            //importing database from our firebase config
/*
    FetchId is used retrieve IdMetadata
    1.sets it to the global Id object for use locally
    props.email is the argument
*/

function FetchId(email){
    const docRef = doc(db, "IdMetaData", email);
    const RetrieveDoc = async () => {                            //handles adding an item to database
        const docSnap = await getDoc(docRef); //docSnap.data().Id is the data target
        console.log(docSnap.data().Id)
    }
    RetrieveDoc();

}
export default FetchId;