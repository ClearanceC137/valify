/*
    Validate task is to verify the id
    1. by using luhn algorithm
    props.Id is the object expected
*/
function ValidateId(Id) {
    /* -- set isValid false , value will only change if it passes the luhn algorithm -- */
    let IsValid = false;
    let RawId =Id.IdNumber;
    /* -- validate the id using luhn algorithm  -- */
    let IdArray = RawId.split("");
    for(var i = 0 ; i < RawId.length ; i++){      //convert Id String into array elements(char)
        IdArray[i] =parseInt(RawId[i]); 
    }
    var len = IdArray.length;
    /*
        Double alternate positioned numbers
    1. subtract 9 from the doubled number if greater than 9
    2. keep the double number the same , if less than 9
    */
    for(var i=1; i<len ; i=i+2 ){
        var value = [len-1-i]*2;
        if( value>9 ){
            IdArray[len-1-i] = value-9;
        }
        else{
            IdArray[len-1-i] = value;
        }
    }
    /* -- Sum up all the digits -- */
    var sum = 0;
    for(var i=0 ; i<len ; i++ ){
        sum+=IdArray[i];
    }
    /* -- If the sum modulo 10 equals zero the Id is valid -- */
    if(sum%10 === 0){
        IsValid = true;
    }
    return IsValid
}

export default ValidateId;