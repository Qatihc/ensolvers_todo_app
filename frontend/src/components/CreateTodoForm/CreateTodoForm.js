import React from 'react';
import Form from '../ControlledForm/Form';
import Input from '../ControlledForm/Input';
import SubmitButton from '../ControlledForm/SubmitButton';

const formValidator = {
  content: ({ content }) => {
    if (!content.length) return 'No puede estar vacio'
  }
}

const CreateTodoForm = ({ createTodo }) => {
  const handleSubmit = (values, resetForm) => {
    values.content = values.content.trim();
    createTodo(values)
    resetForm();
  }

  return (
    <Form onSubmit={handleSubmit} formValidator={formValidator}>
      <Input name="content" label="Contenido"></Input>
      <SubmitButton>Crear!</SubmitButton>
    </Form>
  )
}

export default CreateTodoForm;