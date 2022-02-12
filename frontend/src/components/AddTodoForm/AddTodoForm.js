import React from 'react';
import useForm from '../../hooks/useForm';
import Form from '../ControlledForm/Form';
import Input from '../ControlledForm/Input';
import SubmitButton from '../ControlledForm/SubmitButton';

const AddTodoForm = ({ addTodo }) => {
  const handleSubmit = (formValues, resetValues) => {
    addTodo(formValues)
    resetValues();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="content" label="Contenido"></Input>
      <SubmitButton>Crear!</SubmitButton>
    </Form>
  )
}

export default AddTodoForm;