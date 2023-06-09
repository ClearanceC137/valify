import { EmailContext } from '../../context';           //importing global email context for user logged in
import { useState ,useContext,useEffect } from 'react';            //importing required artifacts from react
import { getDocs ,collection } from "firebase/firestore";
import { db } from '../../firebase'; 
import DisplayId from '../../Components/DisplayId/DisplayId';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import Footer from '../Footer/Footer';
import "./Insights.css"
/*
    DisplayId is used to display the meta data
    of an id which includes the following
    1.Year of birth in dd MMMM yyyy format
    2.Display gender
    3.Citizen/Resident
*/
function Insights(){
    const [Graph , setGraph] = useState([false,false,false]);
    const [Category , setCategory] = useState([false,false,false]);
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
            <div className='space'>
                {Ids.map((item, index) => (
                    <text key={index}>{DisplayId(item)}</text>
                ))}
            </div>
        );
    }
    function ShowOptions(){   //Renders all id inside the database
        return (

            <div>
                <div className='scrollbar' style={{marginTop:"50px"}}>
                    <label for="graphs">Choose a graph to display:</label>
                    <select id="graphs">
                        <option id="0" onClick={onGraph}>Line graph</option>
                        <option id="1" onClick={onGraph}>Bar graph</option>
                        <option id="2" onClick={onGraph}>Pie Chart</option>
                    </select>
                </div>
                <div className='scrollbar' style={{marginTop:"10px"}}>
                    <label for="filter">Category</label>
                    <select id="filter">
                        <option id="0" onClick={onCategory}>Year of birth</option>
                        <option id="1" onClick={onCategory}>Gender</option>
                        <option id="2" onClick={onCategory}>CitizenShip</option>
                    </select> 
                </div>
            </div>
        );
    }
    const onGraph = event => {      // Choose which type of graph to display
        var temp = [false ,false , false];
        let id = parseInt(event.target.id);
        alert(id);
        temp[id] = true;
        setGraph(temp);
    }
    const onCategory = event => {      // choose to filter data by the choosen gategory
        var temp = [false ,false , false];
        let id = parseInt(event.target.id);
        alert(id);
        temp[id] = true;
        setCategory(temp);
    }
    const onDatabase = event => {         //Renders database
        setRender(true);
    }
    const onInsights = event => {         //Render Insights
        setRender(false);
    }
    return (
        <dv>
        <div className='block'>
            <div className ="parent-bs">
                <button className='button-show' onClick={onDatabase}>Show Database</button>
                <button className='button-show' onClick={onInsights}>Insights</button>
            </div>
            {Render ? ShowIds() : ShowOptions()}
        </div>
        <Footer/>
        </dv>
    );
}

export default Insights;