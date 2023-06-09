import './Display.css'
/*
    DisplayId is used to display the meta data
    of an id which includes the following
    1.Year of birth in dd MMMM yyyy format
    2.Display gender
    3.Citizen/Resident
*/
function DisplayId(Id) {

    var date = new Date(parseInt(Id.DateOfBirth.substr(0,2)) > 50 ? "19"+Id.DateOfBirth.substr(0,2)+"-"+Id.DateOfBirth.substr(2,2)+"-"+Id.DateOfBirth.substr(4,2) :"20"+Id.DateOfBirth.substr(0,2)+"-"+Id.DateOfBirth.substr(2,2)+"-"+Id.DateOfBirth.substr(4,2));
    const Gender = parseInt(Id.Gender.substr(6,4) < 5000) ? "Female" : "Male  " ;  // 0000 < 4999 are female and 5000-9999
    const Citizenship = parseInt(Id.Citizenship.substr(10,1) === 0) ? "SA citizen" : "Permanent resident" ;  // SA citizen – 0 – or a permanent resident – 1

    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    var formattedDay = day < 10 ? '0' + day : day;   //Day should be in the format dd
    var formattedMonth = monthNames[monthIndex];
    var formattedDate = formattedDay + ' ' + formattedMonth.substr(0,4) + ' ' + year;
    return (
        <div className="display-cn">
           <h1 className='data'>Date of birth:{formattedDate}</h1>
           <h1 className='data'>Gender:{Gender}</h1>
           <h1 className='data'>Citizenship:{Citizenship}</h1>
           <h1 className='data'>Id number:{Id.IdNumber}</h1>
        </div>
    );
}
export default DisplayId;