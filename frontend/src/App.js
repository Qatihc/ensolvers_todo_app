import React, { useState } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import LoginForm from './components/AuthForms/LoginForm';
import RegisterForm from './components/AuthForms/RegisterForm';
import GlobalStyle from './globalStyles';
import LandingPage from './pages/LandingPage/LandingPage';
import UserServices from './services/UserServices';

const App = () => {
  const [currentUserToken, setCurrentUserToken] = useState(null);
  const userServices = new UserServices(setCurrentUserToken);
  console.log(currentUserToken);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route path="/" element={
              <Navigate to="login" />} 
            />
            <Route path='login' element={
              <LoginForm login={userServices.login}/>} 
            />
            <Route path='register' element={
              <RegisterForm register={userServices.register}/>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    );
}

export default App;