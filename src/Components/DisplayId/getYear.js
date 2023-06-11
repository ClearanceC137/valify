/*
    Return year of birth
*/
function GetYear(Id) {
    var date = new Date(parseInt(Id.DateOfBirth.substr(0,2)) > 50 ? "19"+Id.DateOfBirth.substr(0,2)+"-"+Id.DateOfBirth.substr(2,2)+"-"+Id.DateOfBirth.substr(4,2) :"20"+Id.DateOfBirth.substr(0,2)+"-"+Id.DateOfBirth.substr(2,2)+"-"+Id.DateOfBirth.substr(4,2));
    var year = date.getFullYear();
    return year;
}
export default GetYear;