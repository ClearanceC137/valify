import getCitizen from "../DisplayId/getCitizen";
import getGender from "../DisplayId/getGender";
import GetYear from "../DisplayId/getYear";
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
/*
    Display a chart based on the following
    1.type of graph
    2.type of category
    
*/
function DisplayGraph(Id,graph,category) {
    const set = {};
    function filter(func ){      // func is a function which return either year,birth or citizen
        Id.forEach(function(id) {
            var key = func(id);
            if(!set.hasOwnProperty(key)){
                //set does not have the property(initialize)
                set[key] = 1;
            }else{
                set[key]++;
            }
        })
    }
    if(category === 0){   //filter by Year
        filter(GetYear);
    }else if (category === 1) {   // filter by Gender
        filter(getGender);
    }else if(category === 2) {    //filter by Citizenship
        filter(getCitizen);
    }

    if(graph  === 0){   //Render LineChart
        return LineChart(set);
    }else if (graph === 1) {   //Render BarChart
        return BarChart(set);
    }else if(graph === 2) {    //Render PieChart
        return PieChart(set); 
    }




};
export default DisplayGraph;