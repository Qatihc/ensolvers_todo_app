import React, { useState } from 'react';

const TodoItem = ({ id, content, isDone, createdAt }) => {
  return (
    <li key={id}>{content}</li>
  )
}

export default TodoItem;