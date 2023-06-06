import Register from "./Pages/User/Register/Register";
import Home from "./Pages/HomePage/Home";
import Login from "./Pages/User/Login/Login";
import { BrowserRouter, Routes, Route} from "react-router-dom";    //importing required artifacts from react-router-dom
import { EmailContext } from "./context";       //email context propagated through entire site
import { React, useState} from "react";       //importing required artifacts from react
import DisplayId from "./Components/DisplayId/DisplayId"
function App() {
  const [userEmail, setUserEmail] = useState("");

  return (
    <EmailContext.Provider value={{ userEmail, setUserEmail }}>     {/*email provider once logged in*/}
      <BrowserRouter>                                              {/*routes container for different screens*/}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </EmailContext.Provider>
  );
}

export default App;
