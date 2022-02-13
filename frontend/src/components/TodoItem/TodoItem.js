import React from 'react';
import { BsTrashFill, BsPencilSquare } from 'react-icons/bs';
import { TodoText, TodoActions, TodoItemContainer } from './StyledComponents';

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