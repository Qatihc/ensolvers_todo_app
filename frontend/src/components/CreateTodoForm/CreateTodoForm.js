import React from 'react';
import Form from '../ControlledForm/Form';
import Input from '../ControlledForm/Input';
import SubmitButton from '../ControlledForm/SubmitButton';

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
    <Form onSubmit={handleSubmit} formValidator={createTodoFormValidator}>
      <Input name="content" label="content"></Input>
      <SubmitButton>Crear todo</SubmitButton>
    </Form>
  )
}

export default CreateTodoForm;