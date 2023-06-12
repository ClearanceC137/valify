import { render, screen } from '@testing-library/react';
import { useContext} from 'react';            //importing required artifacts from react
import { EmailContext } from '../context';           //importing global email context for user logged in
import Header from '../Components/Header/Header';
import { BrowserRouter, Routes, Route} from "react-router-dom";    //importing required artifacts from react-router-dom
import MocksetEmailContext from './MocksetEmailContext';

test('checks if Header shows users email on the profile', () => {
    MocksetEmailContext();
    render(
        <BrowserRouter>
            <Routes>
            <Route path="*" element= {<Header/>}/>
            </Routes>
        </BrowserRouter>

    );
    //have to set global emailContext first for the test to pass
    expect(screen.queryByTestId("email-element")?.textContent).toContain("clearancetshepiso@gmail.com");
});