import React from 'react';
import Form from '../ControlledForm/Form';
import Input from '../ControlledForm/Input';
import SubmitButton from '../ControlledForm/SubmitButton';

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
    <Form onSubmit={handleSubmit} formValidator={createFolderFormValidator}>
      <Input name="name" label="Work"></Input>
      <SubmitButton>Crear carpeta</SubmitButton>
    </Form>
  )
}

export default CreateFolderForm;