/*
    DisplayId is used to display the meta data
    of an id which includes the following
    1.Year of birth in dd MMMM yyyy format
    2.Display gender
    3.Citizen/Resident
*/
function DisplayId(props) {
    let Id = {IsValid:false,DateOfBirth:"", Gender:"", Citizenship:"", Race:0,checksum:"",IdNumber:""};
    let id ="0010095594080";       // props.IdNumber
    const DateOfBirth = new Date(parseInt(id.substr(0,2)) > 50 ? "19"+id.substr(0,2)+"-"+id.substr(2,2)+"-"+id.substr(4,2) :"20"+id.substr(0,2)+"-"+id.substr(2,2)+"-"+id.substr(4,2)); 
    const Gender = parseInt(id.substr(6,4) < 5000) ? "Female" : "Male" ;  // 0000 < 4999 are female and 5000-9999
    const Citizenship = parseInt(id.substr(10,1) === 0) ? "SA citizen" : "Permanent resident" ;  // SA citizen – 0 – or a permanent resident – 1
    return (
        <div>
           <text>Home Page</text><br/>
        </div>
    );
}

export default DisplayId;