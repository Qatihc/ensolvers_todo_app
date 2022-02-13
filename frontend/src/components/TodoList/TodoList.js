import React, { useState } from 'react';
import styled from 'styled-components';
import CreateTodoForm from '../CreateElementForms/CreateTodoForm';
import EditTodoForm from '../EditTodoForm/EditTodoForm';
import { TodoFormContainer } from '../TodoAppContainer/StyledComponents';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos, currentFolderId, todoServices }) => {
  const [editedTodoId, setEditedTodoId] = useState(null);
  const { deleteTodoById, toggleTodoById, updateTodoContentById } = todoServices;

  const cancelTodoUpdate = () => {
    setEditedTodoId(null);
  }

  const confirmTodoUpdate = ({ content }) => {
    updateTodoContentById({ id: editedTodoId, newContent: content});
    setEditedTodoId(null);
  }

  const selectTodoToUpdate = ({ id }) => {
    setEditedTodoId(id);
  }

  return (
    <main>
      <TodoFormContainer>
        {editedTodoId ?
        <EditTodoForm 
          todo={todos.find((todo) => todo.id === editedTodoId)}
          confirmTodoUpdate={confirmTodoUpdate}
          cancelTodoUpdate={cancelTodoUpdate}
        /> :
        <CreateTodoForm 
          folderId={currentFolderId}
          createTodo={todoServices.createTodo}
        /> 
        }
      </TodoFormContainer>
      {!editedTodoId &&
        <ul>
          {todos.map((todo) => {
            return (
              <TodoItem 
                key={todo.id}
                todo={todo}
                deleteTodoById={deleteTodoById}
                selectTodoToUpdate={selectTodoToUpdate}
                toggleTodoById={toggleTodoById}
              />
            )
          })}
        </ul>
      }
    </main>
  )
}

export default TodoList;