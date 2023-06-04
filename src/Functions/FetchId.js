/*
    FetchId is used retrieve IdMetadata
    1.sets it to the global Id object for use locally
    props.email is the argument
*/

function FetchId(props) {
    let RawId ="0010095594080";      // raw id string which is obtained from props.id
    let Id = {IsValid:false,DateOfBirth:"", Gender:"", Citizenship:"", Race:0,checksum:"",IdNumber:""}; //must be fetched
    return Id;
}

export default FetchId;