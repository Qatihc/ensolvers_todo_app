import React, { useState, useEffect } from 'react';
import TodoServices from '../../services/TodoServices';
import AddTodoForm from '../CreateTodoForm/CreateTodoForm';
import TodoList from '../TodoList/TodoList';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const todoServices = new TodoServices(todos, setTodos);

  useEffect(async () => {
    setIsLoading(true);
    await todoServices.fetchAllTodos();
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && 'PLACEHOLDER PARA SPINNER'}
      <AddTodoForm createTodo={todoServices.createTodo}/>
      <TodoList todos={todos} updateTodo={''} deleteTodoById={todoServices.deleteTodoById} />
    </>
  )
}

export default TodoContainer;