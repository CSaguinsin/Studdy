import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'



// components
import Home from './landingPage/Home'
import Navbar from './navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
