import React, { useState } from 'react';

const TodoItem = ({ todo, deleteTodoById, updateTodoContentById }) => {
  const { id, content, isDone, createdAt } = todo;

  const handleClick = () => {
    deleteTodoById(id);
  }

  return (
    <li onClick={handleClick}>{content}</li>
  )
}

export default TodoItem;