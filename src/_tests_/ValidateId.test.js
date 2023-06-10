import ValidatedId from '../Functions/ValidateId';


test("assert return value for a valid SA id", () => {
    const temp = {IsValid:false,DateOfBirth:"800101", Gender:"5009", Citizenship:"0", Race:"8",Checksum:"7",IdNumber:"8001015009087"}
    expect(ValidatedId(temp)).toBeTruthy();
})

test("assert return value for an invalid SA id", () => {
    const temp = {IsValid:false,DateOfBirth:"710201", Gender:"0082", Citizenship:"4", Race:"9",Checksum:"6",IdNumber:"7102010082049"}
    expect(ValidatedId(temp)).toBeFalsy();
})