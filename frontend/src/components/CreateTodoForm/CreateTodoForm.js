import React from 'react';
import Form from '../ControlledForm/Form';
import Input from '../ControlledForm/Input';
import SubmitButton from '../ControlledForm/SubmitButton';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: row;
`

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
      <Input name="content" label="content"></Input>
      <SubmitButton>Crear todo</SubmitButton>
    </StyledForm>
  )
}

export default CreateTodoForm;