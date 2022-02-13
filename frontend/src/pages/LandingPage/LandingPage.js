import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from 'styled-components';

const PageLayout = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: var(--clr-orange-1);
  align-items: center;
  justify-content: center;
`

const FormContainer = styled.div`
  margin-top: var(--size-8);
  width: min(90vw, var(--size-15));
`

const LandingPage = ({ currentUserToken }) => {
  const navigate = useNavigate();

  // Si el usuario ya esta logueado lo redirijo al selector de carpetas.
  useEffect(() => {
    if (currentUserToken) navigate("/folder");
  }, [])

  return (
    <PageLayout>
      <FormContainer>
        <Outlet />
      </FormContainer>
    </PageLayout>
  )
}

export default LandingPage;