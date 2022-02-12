import React from "react";
import { Outlet } from "react-router-dom";
import { PageContainer, FormContainer } from "./StyledComponents";

const LandingPage = () => {
  return (
    <PageContainer>
      <FormContainer>
        <Outlet />
      </FormContainer>
    </PageContainer>
  )
}

export default LandingPage;