import React from 'react';
import styled from 'styled-components';
import { BsTrashFill, BsPencilSquare } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const TodoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: var(--size-4);
  justify-content: space-between;
  align-items: flex-start;
  margin-top: var(--size-4);
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`

const TodoActions = styled.div`
  display: flex;
  gap: 2rem;
  margin: 0 var(--size-6);

  @media (min-width: 600px) {
    margin: 0;
  }

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
  display: flex;
  max-width: 100%;
  word-break: break-all;
  margin-top: var(--size-2);
  @media (min-width: 600px) {
    max-width: 70%;
  }

  input {
    display: inline-block;
    cursor: pointer;
  }

  p {
    margin-left: 1rem;
    display: inline-block;
    cursor: pointer;
    transition: color .2s ease-in-out;
   ${({ isDone }) => isDone ? 'color: var(--clr-gray-5)' : ''}
  }
`

const TodoItem = ({ todo, deleteTodoById, selectTodoToUpdate, toggleTodoById }) => {
  const { id, content, isDone } = todo;

  const handleDelete = async () => {
    await deleteTodoById({ id });
  }

  const handleToggle = async () => {
    await toggleTodoById({ id });
  }

  const handleEdit = async () => {
    selectTodoToUpdate({ id });
  }

  return (
    <li>
      <TodoItemContainer>
        <TodoText isDone={isDone}>
          <input type='checkbox' checked={isDone} onChange={handleToggle}/>
          <p onClick={handleToggle}>{content}</p>
        </TodoText>
        <TodoActions isDone={isDone}>
          <button onClick={handleDelete}>
            <BsTrashFill/>
          </button>
          <button onClick={handleEdit}>
            <BsPencilSquare />
          </button>
        </TodoActions>
      </TodoItemContainer>
    </li>
  )
}

export default TodoItem;