/*
    Validate task is to verify the id
    1. by using luhn algorithm
    props.Id is the object expected
*/
function ValidateId(Id) {
    /* -- set isValid false , value will only change if it passes the luhn algorithm -- */
    let IsValid = false;
    let RawId =Id.IdNumber;
    let IdArray = RawId.split("");
    for(var i = 0 ; i < RawId.length ; i++){      //convert Id String into array elements(char)
        IdArray[i] =parseInt(RawId[i]); 
    }
    var len = IdArray.length;
    /*    Luhn algorithm
        Double alternate positioned numbers
    1. subtract 9 from the doubled number if greater than 9
    2. keep the double number the same , if less than 9
    */
    var sum = 0;
    var doubleNumber= false;
    for (var i = IdArray.length - 1; i >= 0; i--) {
        var num = IdArray[i];
        if (doubleNumber) {
        num =num*2;
        if (num > 9) {
            num -= 9;
        }
        }
        sum += num;      // Sum the result of numbers
        doubleNumber = !doubleNumber;
    }
    /* -- If the sum modulo 10 equals zero the Id is valid -- */
    if(sum%10 === 0){
        IsValid = true;
    }
    return IsValid
}

export default ValidateId;