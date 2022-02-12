import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos, deleteTodoById, updateTodoContentById }) => {
  return (
    <main>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem 
              key={todo.id}
              todo={todo}
              deleteTodoById={deleteTodoById}
              updateTodoContentById={updateTodoContentById}
            />)
        })}
      </ul>
    </main>
  )
}

export default TodoList;