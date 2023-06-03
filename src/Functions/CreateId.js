

/*
    CreateId is used to format id string
    into a useable object as well as to check if the input string is valid
    props.RawStr is the original id
*/
function CreateId(props) {
    let RawId ="0010095594080";      // raw id string which is obtained from props.id
    let Id = {IsValid:false,DateOfBirth:"", Gender:"", Citizenship:"", Race:0,checksum:"",IdNumber:""};

    if(RawId.length !== 13){
        /* -- Number of digits of an id should be 13  -- */
        return Id;
    }else if(!(/^\d+$/.test(RawId))){
        /* -- check if the string does not have characters -- */
        return Id;
    }
    Id.IsValid = true;           // format of the id is valid
    Id.DateOfBirth = RawId.substr(0, 6);
    Id.Gender = RawId.substr(6, 4);
    Id.Citizenship = RawId.substr(10, 1);
    Id.Race = RawId.substr(11, 1);
    Id.Race = RawId.substr(12, 1);
    Id.IdNumber =RawId;
    return Id;
}

export default CreateId;