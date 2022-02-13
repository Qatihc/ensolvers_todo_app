import Form from '../ControlledForm/Form';
import Input from '../ControlledForm/Input';
import SubmitButton from '../ControlledForm/SubmitButton';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`

export const StyledSubmitButton = styled(SubmitButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--size-2);
  margin-top: var(--size-2);
  @media (min-width: 600px) {
    margin-top: 0;
    margin-left: var(--size-2);
    flex-direction: row;
  }
`

export const StyledInput = styled(Input)`
  padding: var(--size-2);
  max-width: 100%;
`