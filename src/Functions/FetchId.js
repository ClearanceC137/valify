import { doc, getDoc } from "firebase/firestore";
import { db } from '../../../firebase';            //importing database from our firebase config
/*
    FetchId is used retrieve IdMetadata
    1.sets it to the global Id object for use locally
    props.email is the argument
*/

function FetchId(props) {
    let email = props.email;
    const docRef = doc(db, "Users", email);
    const addToDatabase = async () => {                            //handles adding an item to database
        const docSnap = await getDoc(docRef); //docSnap.data() is the data
    }
}

export default FetchId;