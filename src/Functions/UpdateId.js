import { doc, setDoc ,updateDoc } from "firebase/firestore";
import { db } from '../firebase';            //importing database from our firebase config

/*
    UpdateId takes the IdMetaData
    1.Updates in the database
    2. use email as reference
*/

function UpdateId(Id,email) {
    const UpdateDatabase = async () => {                            //handles updating an item to database
        await updateDoc(doc(db, "IdMetaData", email), {
            IsValid: Id.IsValid,        // format of the id is valid
            DateOfBirth :Id.DateOfBirth,
            Gender:Id.Gender,
            Citizenship:Id.Citizenship,
            Race:Id.Race,
            Checksum:Id.Checksum,
            IdNumber:Id.IdNumber
        });
    }
    UpdateDatabase();
}
export default UpdateId;