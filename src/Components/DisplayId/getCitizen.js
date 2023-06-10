import './Display.css'
/*
    returns CitizenShip
*/
function getCitizen(Id) {
    const Citizenship = parseInt(Id.Citizenship.substr(10,1) === 0) ? "SA citizen" : "Permanent resident" ;  // SA citizen – 0 – or a permanent resident – 1
    return  Citizenship;
}
export default getCitizen;