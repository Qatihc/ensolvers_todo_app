import React from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import TodoContainer from "../../components/TodoContainer/TodoContainer";

const PageLayout = styled.div`
  display: grid;
  max-height: 100vh;
  grid-template-columns: 1fr 1fr 5fr 1fr 1fr;
`

const PageHeader = styled.header`
  display: flex;
  justify-content: space-around;
  grid-column: 2/5;
  grid-row: 1;
`

const TodoPage = ({ currentUserToken, logout }) => {
  // Si el usuario no esta logueado lo redirijo a login.
  if (!currentUserToken) return (<Navigate to="/login" />)

  return (
    <PageLayout>
      <PageHeader>
        <h2>To do App</h2>
        <button onClick={logout}>Log out</button>
      </PageHeader>
      <TodoContainer />
    </PageLayout>
  )
}

export default TodoPage;