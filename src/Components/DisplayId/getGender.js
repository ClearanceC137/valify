import './Display.css'
/*
    Return Gender
*/
function getGender(Id) {
    const Gender = parseInt(Id.Gender.substr(6,4) < 5000) ? "Female" : "Male  " ;  // 0000 < 4999 are female and 5000-9999
    return Gender;
}
export default getGender;