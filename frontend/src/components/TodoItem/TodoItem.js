import React, { useState } from 'react';
import styled from 'styled-components';
import { BsTrashFill, BsPencilSquare } from 'react-icons/bs';

const TodoContainer = styled.div`
  display: flex;
  font-size: var(--size-4);
  justify-content: space-between;
  align-items: center;
`

const TodoActions = styled.div`
  display: flex;
  gap: 2rem;

  & button {
    background: none;
    border: none;
    cursor: pointer;
  }

  & svg {
    ${({ isDone }) => isDone ? 'color: var(--clr-gray-4);' : 'color: var(--clr-gray-7);'}
    font-size: 1.5rem;
  }
`

const TodoText = styled.div`
  max-width: 70%;
  word-break: break-all;
  margin-top: var(--size-2);
  input {
    display: inline-block;
    cursor: pointer;
  }

  p {
    margin-left: 1rem;
    display: inline-block;
    cursor: pointer;
   ${({ isDone }) => isDone ? 'color: var(--clr-gray-5)' : ''}
  }
`

const TodoItem = ({ todo, deleteTodoById, toggleTodoById, startContentUpdateById }) => {
  const { id, content, isDone } = todo;

  const handleDelete = async () => {
    await deleteTodoById({ id });
  }

  const handleToggle = async () => {
    await toggleTodoById({ id });
  }

  const handleStartContentUpdate = async () => {
    startContentUpdateById(id);
  }

  return (
    <li>
      <TodoContainer>
        <TodoText isDone={isDone}>
          <input type='checkbox' checked={isDone} onChange={handleToggle}/>
          <p onClick={handleToggle}>{content}</p>
        </TodoText>
        <TodoActions isDone={isDone}>
          <button onClick={handleDelete}>
            <BsTrashFill/>
          </button>
          <button onClick={handleStartContentUpdate}>
            <BsPencilSquare />
          </button>
        </TodoActions>
      </TodoContainer>
    </li>
  )
}

export default TodoItem;