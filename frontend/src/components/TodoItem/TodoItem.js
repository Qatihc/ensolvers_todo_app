import React, { useState } from 'react';
import styled from 'styled-components';
import { BsTrashFill, BsPencilSquare } from 'react-icons/bs';

const TodoContainer = styled.div`
  display: flex;
  padding: 0 2rem;
  font-size: var(--size-4);
  justify-content: space-between;
`

const TodoActions = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.5rem;
`

const TodoText = styled.div`
  ${({ isDone }) => isDone ? 'color: gray' : ''}
`

const TodoItem = ({ todo, deleteTodoById, toggleTodoById, startContentUpdateById }) => {
  const { id, content, isDone } = todo;

  const handleDelete = async () => {
    await deleteTodoById({ id });
  }

  const handleToggle = async () => {
    await toggleTodoById({ id });
  }

  const handleStartContentUpdate = async (content) => {
    await updateTodoContentById({ id, content });
  }

  return (
    <li>
      <TodoContainer>
        <TodoText onClick={handleToggle} isDone={isDone}>{content}</TodoText>
        <TodoActions>
          <BsTrashFill onClick={handleDelete}/>
          <BsPencilSquare onClick={handleStartContentUpdate}/>
        </TodoActions>
      </TodoContainer>
    </li>
  )
}

export default TodoItem;