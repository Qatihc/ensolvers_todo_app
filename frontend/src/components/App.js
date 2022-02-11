import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>} />
          <Route path="/signup" element={<RegisterForm/>} />
          <Route path="/login" element={<LoginForm/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default App;