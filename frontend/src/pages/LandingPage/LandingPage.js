import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import styled from 'styled-components';

const PageLayout = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormContainer = styled.div`
  margin-top: var(--size-8);
  width: min(90vw, var(--size-15));
`

const LandingPage = ({ currentUserToken }) => {
  // Si el usuario ya esta logueado lo redirijo a todo.
  if (currentUserToken) return (<Navigate to="/todo" />)
  return (
    <PageLayout>
      <FormContainer>
        <Outlet />
      </FormContainer>
    </PageLayout>
  )
}

export default LandingPage;