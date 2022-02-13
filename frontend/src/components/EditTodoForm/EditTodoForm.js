import React, { useState, useEffect } from 'react';

const EditTodoForm = ({ todo, confirm, cancel }) => {
  const [content, setContent] = useState(todo?.content);

  const handleChange = (e) => {
    setContent(e.target.value);
  }

  return (
    <div>
      <h2>Editando todo "{todo.content}"":</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input value={content} onChange={handleChange} />
        <button onClick={() => confirm(content)}>Aceptar</button>
        <button onClick={cancel}>Cancelar</button>
      </form>
    </div>
  )
}

export default EditTodoForm;