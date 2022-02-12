import React from "react";
import { Navigate } from "react-router-dom";
import TodoContainer from "../../components/TodoContainer/TodoContainer";

const TodoPage = ({ currentUserToken }) => {
  // Si el usuario no esta logueado lo redirijo a login.
  if (!currentUserToken) return (<Navigate to="/login" />)

  return (
    <TodoContainer />
  )
}

export default TodoPage;