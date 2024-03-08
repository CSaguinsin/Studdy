import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'



// components
import Home from './landingPage/Home'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer';

import Login from './logIn/pages/LogIn';
import SignIn from './logIn/pages/SignIn';

function App() {
  return (
    <>
      <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<SignIn />} />
          </Routes>
      <Footer />
    </>
  )
}

export default App
