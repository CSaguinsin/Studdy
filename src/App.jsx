import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { ContextProvider } from './context/ContextProvider';



// components
import Home from './landingPage/Home'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer';
import Login from './logIn/pages/LogIn';
import SignIn from './logIn/pages/SignIn';

// After auth components
import LandingPage from './MainUI/LandingPage/landingPage'

function App() {
  return (
    <ContextProvider>
      <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<SignIn />} />

              {/* After user auth components */}
              <Route path="/landingpage" element={<LandingPage />} />
              {/* end */}
          </Routes>
      <Footer />
      </ContextProvider>
  )
}

export default App
