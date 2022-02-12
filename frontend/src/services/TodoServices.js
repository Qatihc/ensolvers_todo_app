import axios from "./axiosInstance";

export default class TodoServices {
  constructor(todos, setTodos) {
    this.setTodos = setTodos;
    this.todos = todos;
  }

  // No es necesario pasar el usuario por que la instancia de axios lo tiene como header.
  fetchAllTodos = async () => {
    const { data } = await axios.get('/todo');
    this.setTodos(data);
  }

  addTodo = async (todo) => {
    // Realizo una actualizacion optimista y le agrego una id temporal 
    // que reemplazo por la id real cuando el server responda.
    todo.id = 3;
    todo.isDone = false;
    this.setTodos([...this.todos, todo]);
    await axios.post('/todo', todo);
  }

  deleteTodoById = async (todo) => {

  }
}