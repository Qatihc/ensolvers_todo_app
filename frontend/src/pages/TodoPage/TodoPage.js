import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TodoContainer from "../../components/TodoContainer/TodoContainer";

const PageLayout = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr 1fr 5fr 1fr 1fr;
  grid-template-rows: min-content 1fr;
  background-color: var(--clr-orange-1);
`

const PageHeader = styled.header`
  display: flex;
  justify-content: space-around;
  grid-column: 2/5;
  grid-row: 1;
`

const TodoPage = ({ currentUserToken, logout }) => {
  const navigate = useNavigate();

  // Si el usuario no esta logueado lo redirijo a login.
  useEffect(() => {
    if (!currentUserToken) navigate("/login");
  }, []);

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <PageLayout>
      <PageHeader>
        <h2>To do App</h2>
        <button onClick={handleLogout}>Log out</button>
      </PageHeader>
      <TodoContainer />
    </PageLayout>
  )
}

export default TodoPage;