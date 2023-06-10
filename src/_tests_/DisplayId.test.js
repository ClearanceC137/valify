import { render, screen } from '@testing-library/react';
import getCitizen from '../Components/DisplayId/getCitizen';
import getGender from '../Components/DisplayId/getGender';
import getYear from '../Components/DisplayId/getYear';
import DisplayId from '../Components/DisplayId/DisplayId';


test('checks if DisplayId has rendered the meta data', () => {
    const temp = {IsValid:false,DateOfBirth:"001009", Gender:"5594", Citizenship:"0", Race:"8",Checksum:"0",IdNumber:"0010095594080"}
    render( DisplayId(temp) );
    expect(screen.getByText(/Id number:0010095594080/i)).toBeInTheDocument();
    expect(screen.getByText(/Date of birth:09 Octo 2000/i)).toBeInTheDocument();
    expect(screen.getByText(/Gender:Male/i)).toBeInTheDocument();
    expect(screen.getByText(/Citizenship:SA citizen/i)).toBeInTheDocument();
});

test("checks if for the Citizenship of SA citizen", () => {
    const temp = {IsValid:false,DateOfBirth:"001009", Gender:"5594", Citizenship:"0", Race:"8",Checksum:"0",IdNumber:"0010095594080"}
    expect(getCitizen(temp)).toBe("SA citizen");
})

test("checks if for the Citizenship of a permanent resident", () => {
    const temp = {IsValid:false,DateOfBirth:"001009", Gender:"5594", Citizenship:"1", Race:"8",Checksum:"0",IdNumber:"0010095594180"}
    expect(getCitizen(temp)).toBe("Permanent resident");
})

test("checks if for year of birth if born in 20s", () => {
    const temp = {IsValid:false,DateOfBirth:"001009", Gender:"5594", Citizenship:"1", Race:"8",Checksum:"0",IdNumber:"0010095594180"}
    expect(getYear(temp)).toBe(2000);
})

test("checks if for year if born in 19s", () => {
    const temp = {IsValid:false,DateOfBirth:"991009", Gender:"5594", Citizenship:"1", Race:"8",Checksum:"0",IdNumber:"9910095594180"}
    expect(getYear(temp)).toBe(1999);
})

test("checks if for gender when male", () => {
    const temp = {IsValid:false,DateOfBirth:"001009", Gender:"5594", Citizenship:"0", Race:"8",Checksum:"0",IdNumber:"001009594080"}
    expect(getGender(temp)).toBe("Male  ");
})

test("checks if for gender when female", () => {
    const temp = {IsValid:false,DateOfBirth:"001009", Gender:"4444", Citizenship:"0", Race:"8",Checksum:"0",IdNumber:"0010094444080"}
    expect(getGender(temp)).toBe("Female");
})


