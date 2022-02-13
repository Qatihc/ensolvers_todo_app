import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { SmallLoadingSpinner } from '../../LoadingSpinner';
import { FormContainer, StyledForm, StyledInput, StyledSubmitButton, FormTitle, FormSubtitle, FormError } from "./StyledComponents";

const RegisterForm = ({ register }) => {
  const [requestError, setRequestError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formValues) => {
    try {
      setIsLoading(true);
      await register(formValues);
    } catch (err) {
      setRequestError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <FormContainer>
      <FormTitle>Crea tu usuario.</FormTitle>
      <FormSubtitle>Ya tenes una cuenta? <Link to="/login">Logueate</Link></FormSubtitle>
      <FormError>{requestError}</FormError>
      <StyledForm onSubmit={handleSubmit} displayErrorOnBlur={true}>
        <StyledInput name="username" label="Username" />
        <StyledInput name="password" label="Password" type="password" />
        <StyledInput name="confirmPassword" type="password" label="Confirm password" />
        <StyledSubmitButton>{isLoading ? <SmallLoadingSpinner /> : 'Registrar'}</StyledSubmitButton>
      </StyledForm>
    </FormContainer>
  );
}

export default RegisterForm;