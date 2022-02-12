import React, { useState, useEffect } from 'react'
import useForm from '../../hooks/useForm'
import useFormValidator from '../../hooks/useFormValidator'
import { childrenByType, firstChildByType } from '../../utils/selectChildrenByType'
import Input from './Input'
import SubmitButton from './SubmitButton'


const Form = ({ children, onSubmit, className, formValidator, displayErrorOnBlur }) => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const inputChildren = childrenByType(children, Input);
  const submitButtonChild = firstChildByType(children, SubmitButton);
  const inputNames = inputChildren.map((child) => child.props.name)
  
  const { formValues, resetValues, handleInputChange } = useForm(inputNames);

  // Normalmente no se deberian usar hooks de forma condicional ya que genera problemas con la forma en la que react
  // detecta cual es y donde esta cada hook. Pero como formValidator no forma parte del estado o las props de ningun components,
  // estoy asumiendo que no va a modificarse y por ende el operador terciario siempre va a devolver la misma rama.

  const formErrors = formValidator ? useFormValidator(formValues, formValidator) : {};
  const isError = Object.values(formErrors).some(value => value);

  useEffect(() => {
    if (!isSubmitDisabled) return;
    setIsSubmitDisabled(isError)
  }, [formErrors])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isError) return setIsSubmitDisabled(true);
    return onSubmit(formValues, resetValues);
  }

  const transformInputChild = (child) => {
    const { name } = child.props;
    const value = formValues[name];
    const error = formErrors[name];
    return React.cloneElement(child, {
      onChange: handleInputChange,
      value,
      error,
      displayErrorOnBlur: displayErrorOnBlur,
      forceDisplayError: isSubmitDisabled
    })
  }

  const transformSubmitButtonChild = (child) => {
    return React.cloneElement(child, {
      handleSubmit,
      disabled: isSubmitDisabled
    })
  }

  return (
    <form className={className}>
      {inputChildren.map((child) => transformInputChild(child))}
      {transformSubmitButtonChild(submitButtonChild)}
    </form>
  )
}

export default Form;