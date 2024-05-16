import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation'; 
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import Notification from './Components/Notification/Notification';
import Notification from './Components/ReviewForm/ReviewForm';


function App() {

  return (
    <div className="App">
        <BrowserRouter>
        <Notification>
          <Navbar/>
              <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/SignUp" element={<SignUp/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/instantConsultation" element={<InstantConsultation />} />
              <Route path="/ReviewForm" element={<ReviewForm />} />
              <Route path="/FindDoctorSearch" element={<FindDoctorSearch/>}/>
              </Routes>

            </Notification>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
