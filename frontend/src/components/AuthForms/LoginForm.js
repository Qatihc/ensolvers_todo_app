import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormContainer, StyledForm, StyledInput, StyledSubmitButton, FormTitle, FormSubtitle, FormError } from "./StyledComponents";

const LoginForm = ({ login }) => {
  const [requestError, setRequestError] = useState(null);

  const handleSubmit = async (formValues) => {
    try {
      await login(formValues);
    } catch (err) {
      setRequestError(err.message);
    }
  }

  return (
    <FormContainer>
      <FormTitle>Ingresa a tu cuenta.</FormTitle>
      <FormSubtitle>No tenes un usuario? <Link to="/register">Registrate</Link></FormSubtitle>
      <FormError>{requestError}</FormError>
      <StyledForm onSubmit={handleSubmit} displayErrorOnBlur={true}>
        <StyledInput name="username" label="Username" />
        <StyledInput name="password" label="Password" type="password" />
        <StyledSubmitButton >Log in</StyledSubmitButton>
      </StyledForm>
    </FormContainer>
  )
}

export default LoginForm;