import { render, screen } from '@testing-library/react';
import { useContext} from 'react';            //importing required artifacts from react
import { EmailContext } from '../context';           //importing global email context for user logged in
import Header from '../Components/Header/Header';
import { BrowserRouter, Routes, Route} from "react-router-dom";    //importing required artifacts from react-router-dom
EmailContext.setUserEmail = 'clearancetshepiso@gmail.com';

test('checks if Header shows users email on the profile', () => {
    render(
        <BrowserRouter>
            <Routes>
            <Route path="*" element= {<Header/>}/>
            </Routes>
        </BrowserRouter>

    );
   // expect(screen.getByTestId('email-element')).toHaveTextContent('clearancetshepiso@gmail.com');
   expect(screen.queryByTestId("email-element")?.textContent).toContain("clearancetshepiso@gmail.com");
});