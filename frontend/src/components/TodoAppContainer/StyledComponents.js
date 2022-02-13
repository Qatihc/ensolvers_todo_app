import styled from 'styled-components'

export const ListContainer = styled.main`
  position: relative;
  padding: var(--size-6);
  padding-top: 0;
  height: 70vh;
  width: min(90vw, var(--size-17));
  overflow-y: auto;
`

export const TodoFormContainer = styled.div`
  margin-bottom: var(--size-6);
`

export const CurrentFolderNav = styled.nav`
  padding: var(--size-6);
`