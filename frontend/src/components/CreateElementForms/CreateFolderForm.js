import React from 'react';
import { StyledForm, StyledSubmitButton, StyledInput } from './StyledComponents';

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
      <StyledInput name="name" label="Nombre de la carpeta"></StyledInput>
      <StyledSubmitButton>Crear carpeta</StyledSubmitButton>
    </StyledForm>
  )
}

export default CreateFolderForm;