import React, { useState, useEffect } from 'react';
import TodoServices from '../../services/TodoServices';
import AddTodoForm from '../CreateTodoForm/CreateTodoForm';
import TodoList from '../TodoList/TodoList';
import styled from "styled-components";

const TodoContainer = ({ className }) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const todoServices = new TodoServices(todos, setTodos);

  useEffect(async () => {
    setIsLoading(true);
    await todoServices.fetchAllTodos();
    setIsLoading(false);
  }, []);

  return (
    <div className={className}>
      <h1>Mis Todos</h1>
      {isLoading && 'PLACEHOLDER PARA SPINNER'}
      <AddTodoForm createTodo={todoServices.createTodo}/>
      <TodoList 
        todos={todos} 
        updateTodoContentById={todoServices.updateTodoContentById} 
        deleteTodoById={todoServices.deleteTodoById} 
        toggleTodoById={todoServices.toggleTodoById}
      />
    </div>
  )
}

export default styled(TodoContainer)`
  grid-row: 2;
  grid-column: 3;
  margin: 0 auto;
`;