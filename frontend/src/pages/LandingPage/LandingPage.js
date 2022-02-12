import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { PageContainer, FormContainer } from "./StyledComponents";

const LandingPage = ({ currentUserToken }) => {
  // Si el usuario ya esta logueado lo redirijo a todo.
  if (currentUserToken) return (<Navigate to="/todo" />)
  return (
    <PageContainer>
      <FormContainer>
        <Outlet />
      </FormContainer>
    </PageContainer>
  )
}

export default LandingPage;