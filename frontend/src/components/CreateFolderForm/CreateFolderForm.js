import React from 'react';
import Form from '../ControlledForm/Form';
import Input from '../ControlledForm/Input';
import SubmitButton from '../ControlledForm/SubmitButton';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: row;
`

const createFolderFormValidator = {
  name: ({ name }) => {
    if (!name.trim().length) return 'No puede estar vacio'
  }
}

const CreateFolderForm = ({ createFolder }) => {
  const handleSubmit = (values, resetForm) => {
    values.name = values.name.trim();
    createFolder(values)
    resetForm();
  }

  return (
    <StyledForm onSubmit={handleSubmit} formValidator={createFolderFormValidator}>
      <Input name="name" label="Nombre de la carpeta"></Input>
      <SubmitButton>Crear carpeta</SubmitButton>
    </StyledForm>
  )
}

export default CreateFolderForm;