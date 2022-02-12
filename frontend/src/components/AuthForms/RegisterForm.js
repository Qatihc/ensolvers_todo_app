import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FormContainer, StyledForm, StyledInput, StyledSubmitButton, FormTitle, FormSubtitle, FormError } from "./StyledComponents";

const RegisterForm = ({ register }) => {
  const [requestError, setRequestError] = useState(null);

  const handleSubmit = async (formValues) => {
    try {
      await register(formValues);
    } catch (err) {
      setRequestError(err.message);
    }
  }

  return (
    <FormContainer>
      <FormTitle>Crea tu usuario.</FormTitle>
      <FormSubtitle>Ya tenes una cuenta? <Link to="/login">Logueate</Link></FormSubtitle>
      <FormError>{requestError}</FormError>
      <StyledForm onSubmit={handleSubmit} >
        <StyledInput name="username" label="Username" />
        <StyledInput name="password" label="Password" type="password" />
        <StyledInput name="confirmPassword" type="password" label="Confirm password" />
        <StyledSubmitButton>Sign up</StyledSubmitButton>
      </StyledForm>
    </FormContainer>
  );
}

export default RegisterForm;