import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'



// components
import Home from './landingPage/Home'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
