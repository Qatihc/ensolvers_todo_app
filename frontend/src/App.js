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

  const todoPage = <TodoPage logout={userServices.logout} currentUserToken={currentUserToken}/>;
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

          {/* React router v6 elimino soporte para parametros opcionales, por lo que tengo que declararlos de esta forma */}
          <Route path="/folder">
            <Route path=":folderId" element={todoPage} />
            <Route path="" element={todoPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;