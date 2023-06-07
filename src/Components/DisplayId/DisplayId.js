/*
    DisplayId is used to display the meta data
    of an id which includes the following
    1.Year of birth in dd MMMM yyyy format
    2.Display gender
    3.Citizen/Resident
*/
function DisplayId(Id) {
    const DateOfBirth = new Date(parseInt(Id.DateOfBirth.substr(0,2)) > 50 ? "19"+Id.DateOfBirth.substr(0,2)+"-"+Id.DateOfBirth.substr(2,2)+"-"+Id.DateOfBirth.substr(4,2) :"20"+Id.DateOfBirth.substr(0,2)+"-"+Id.DateOfBirth.substr(2,2)+"-"+Id.DateOfBirth.substr(4,2));
    const Gender = parseInt(Id.Gender.substr(6,4) < 5000) ? "Female" : "Male" ;  // 0000 < 4999 are female and 5000-9999
    const Citizenship = parseInt(Id.Citizenship.substr(10,1) === 0) ? "SA citizen" : "Permanent resident" ;  // SA citizen – 0 – or a permanent resident – 1
    return (
        <div>
           <text>{DateOfBirth}</text><br/>
           <text>{Gender}</text><br/>
           <text>{Citizenship}</text><br/>
        </div>
    );
}

export default DisplayId;