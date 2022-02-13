import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos, todoServices, className }) => {
  const { deleteTodoById, updateTodoContentById, toggleTodoById } = todoServices;
  return (
    <main>
      <ul className={className}>
        {todos.map((todo) => {
          return (
            <TodoItem 
              key={todo.id}
              todo={todo}
              deleteTodoById={deleteTodoById}
              updateTodoContentById={updateTodoContentById}
              toggleTodoById={toggleTodoById}
            />)
        })}
      </ul>
    </main>
  )
}

export default styled(TodoList)`
  border: 2px solid red;
  height: 80vh;
  width: min(90vw, var(--size-18));
  overflow-y: auto;
`;