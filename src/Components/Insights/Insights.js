import { EmailContext } from '../../context';           //importing global email context for user logged in
import { useState ,useContext,useEffect } from 'react';            //importing required artifacts from react
import { doc, getDocs ,collection } from "firebase/firestore";
import { db } from '../../firebase'; 
import DisplayId from '../../Components/DisplayId/DisplayId';
/*
    DisplayId is used to display the meta data
    of an id which includes the following
    1.Year of birth in dd MMMM yyyy format
    2.Display gender
    3.Citizen/Resident
*/
function Insights(){
    const [Ids, setIds] = useState([]); //state for local cart array
    const { userEmail, setUserEmail } = useContext(EmailContext);           //global state to be set to user after successful login
    useEffect(() => {             // fetch all the Id from data base
    const getIds = async () => {
        const data = await getDocs(collection(db, "IdMetaData"));
        setIds(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getIds();
    }, []);
    return (
        <div>
        {Ids.map((item, index) => (
            <text key={index}>{DisplayId(item)}</text>
        ))}
        </div>
    );
}
export default Insights;