/*
    DisplayId is used to display the meta data
    of an id which includes the following
    1.Year of birth in dd MMMM yyyy format
    2.Display gender
    3.Citizen/Resident
*/
function DisplayId(props) {
    let Id = {IsValid:false,DateOfBirth:"", Gender:"", Citizenship:"", Race:0,checksum:"",IdNumber:""};
    return (
        <div>
           <text>Home Page</text><br/>
           <input placeholder="Id"></input><br/>
            <button >Validate</button>
        </div>
    );
}

export default DisplayId;