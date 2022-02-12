import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormContainer = styled.div`
  margin-top: var(--size-8);
  width: min(90vw, var(--size-15));
`

export { PageContainer, FormContainer };