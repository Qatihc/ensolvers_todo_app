import React, { useState } from 'react';
import styled from 'styled-components';
import EditTodoForm from '../EditTodoForm/EditTodoForm';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos, todoServices, className }) => {
  const { deleteTodoById, updateTodoContentById, toggleTodoById } = todoServices;
  const [editingTodoId, setEditingTodoId] = useState(null);

  const startContentUpdateById = (id) => {
    setEditingTodoId(id)
  }

  const cancelContentUpdate = () => {
    setEditingTodoId(null);
  }

  const confirmContentUpdate = async (newContent) => {
    todoServices.updateTodoContentById({ id: editingTodoId, newContent });
    setEditingTodoId(null);
  }

  const todoToEdit = todos.find((todo) => todo.id === editingTodoId);
  return (
    <main>
      {editingTodoId ? 
        <EditTodoForm 
          todo={todoToEdit} 
          cancel={cancelContentUpdate} 
          confirm={confirmContentUpdate} 
        /> :
        <ul className={className}>
          {todos.map((todo) => {
            return (
              <TodoItem 
                key={todo.id}
                todo={todo}
                deleteTodoById={deleteTodoById}
                startContentUpdateById={startContentUpdateById}
                toggleTodoById={toggleTodoById}
              />
            )
          })}
        </ul>
      }
    </main>
  )
}

export default styled(TodoList)`

`;