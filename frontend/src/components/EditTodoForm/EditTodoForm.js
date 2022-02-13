import React, { useState } from 'react';

const EditTodoForm = ({ todo, cancelTodoUpdate, confirmTodoUpdate }) => {
  const [content, setContent] = useState(todo?.content);

  const handleChange = (e) => {
    setContent(e.target.value);
  }

  return (
    <div>
      <h2>Editando todo "{todo?.content}":</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input value={content} onChange={handleChange} />
        <button onClick={() => confirmTodoUpdate({ content })}>Aceptar</button>
        <button onClick={() => cancelTodoUpdate()}>Cancelar</button>
      </form>
    </div>
  )
}

export default EditTodoForm;