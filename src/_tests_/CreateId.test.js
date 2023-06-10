import CreateId from "../Functions/CreateId";

test("checks if ID object will be initialized properly", () => {
    const temp = {IsValid:false,DateOfBirth:"", Gender:"", Citizenship:"", Race:"",Checksum:"",IdNumber:"0010095594080"}
    expect(CreateId(temp).IsValid).toBeTruthy();
})

test("checks the return value when Id length is not 13", () => {
    const temp = {IsValid:false,DateOfBirth:"", Gender:"", Citizenship:"", Race:"",Checksum:"",IdNumber:"0010095594"};
    expect(CreateId(temp).IsValid).toBeFalsy();
})

test("checks the return value when Id has a character", () => {
    const temp = {IsValid:false,DateOfBirth:"", Gender:"", Citizenship:"", Race:"",Checksum:"",IdNumber:"0010#955_4080"};
    expect(CreateId(temp).IsValid).toBeFalsy();
})

const forth = {IsValid:false,DateOfBirth:"", Gender:"", Citizenship:"", Race:"",Checksum:"",IdNumber:""};

test("checks the return value when Id is empty string", () => {

    expect(CreateId(forth).IsValid).toBeFalsy();
})