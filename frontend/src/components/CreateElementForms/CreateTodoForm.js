import React from 'react';
import { StyledForm, StyledSubmitButton, StyledInput } from './StyledComponents';

const createTodoFormValidator = {
  content: ({ content }) => {
    if (!content.trim().length) return 'No puede estar vacio'
  }
}

const CreateTodoForm = ({ createTodo, folderId }) => {
  const handleSubmit = (values, resetForm) => {
    const content = values.content.trim();
    createTodo({ content, folderId })
    resetForm();
  }

  return (
    <StyledForm onSubmit={handleSubmit} formValidator={createTodoFormValidator}>
      <StyledInput name="content" label="Contenido del todo"></StyledInput>
      <StyledSubmitButton>Crear todo</StyledSubmitButton>
    </StyledForm>
  )
}

export default CreateTodoForm;