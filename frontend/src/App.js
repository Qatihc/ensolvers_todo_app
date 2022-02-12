import React, { useState } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import LoginForm from './components/AuthForms/LoginForm';
import RegisterForm from './components/AuthForms/RegisterForm';
import GlobalStyle from './globalStyles';
import LandingPage from './pages/LandingPage/LandingPage';
import TodoPage from './pages/TodoPage/TodoPage';
import PersistToken from './services/PersistToken';
import UserServices from './services/UserServices';

const App = () => {
  const [currentUserToken, setCurrentUserToken] = useState(PersistToken.getPersistedToken());
  const userServices = new UserServices(setCurrentUserToken);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <LandingPage currentUserToken={currentUserToken}/>
          }>
            <Route path="/" element={
              <Navigate to="login" />
            }/>
            <Route path='login' element={
              <LoginForm login={userServices.login}/> 
            }/>
            <Route path='register' element={
              <RegisterForm register={userServices.register}/>
            }/>
          </Route>
          <Route path="/todo" element={
            <TodoPage logout={userServices.logout} currentUserToken={currentUserToken}/>
          } />
        </Routes>
      </BrowserRouter>
    </>
    );
}

export default App;