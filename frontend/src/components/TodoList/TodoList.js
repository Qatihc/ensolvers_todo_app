import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos }) => {
  return (
    <main>
      <ul>
        {todos.map((todo) => {
          const {id, content, isDone, createdAt } = todo;
          return <TodoItem id={id} content={content} isDone={isDone} createdAt={createdAt}/>
        })}
      </ul>
    </main>
  )
}

export default TodoList;