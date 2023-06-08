import { EmailContext } from '../../context';           //importing global email context for user logged in
import { useState ,useContext,useEffect } from 'react';            //importing required artifacts from react
import { doc, getDocs ,collection } from "firebase/firestore";
import { db } from '../../firebase'; 
import DisplayId from '../../Components/DisplayId/DisplayId';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import "./Insights.css"
/*
    DisplayId is used to display the meta data
    of an id which includes the following
    1.Year of birth in dd MMMM yyyy format
    2.Display gender
    3.Citizen/Resident
*/
function Insights(){
    const [Ids, setIds] = useState([]); //state for local cart array
    const [Render,setRender] =useState(true);
    const { userEmail, setUserEmail } = useContext(EmailContext);           //global state to be set to user after successful login
    useEffect(() => {             // fetch all the Id from data base
    const getIds = async () => {
        const data = await getDocs(collection(db, "IdMetaData"));
        setIds(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getIds();
    }, []);
    function ShowIds(){   //Renders all id inside the database
        return (
            <div>
            {Ids.map((item, index) => (
                <text key={index}>{DisplayId(item)}</text>
            ))}
            </div>
        );
    }
    const onDatabase = event => {         //Renders database
        setRender(true);} 
    const onInsights = event => {         //Render Insights
        setRender(false);}
    return (
        <div className='block'>
            <div className ="parent-bs">
                <button className='button-show' onClick={onDatabase}>Show Database</button>
                <button className='button-show' onClick={onInsights}>Insights</button>
            </div>
            {Render ? ShowIds() : LineChart()}
        </div>
    );
}

export default Insights;