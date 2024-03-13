import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/LogIn.jsx";
import SignIn from "./pages/SignIn.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;