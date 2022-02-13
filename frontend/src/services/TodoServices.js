import axios from "./axiosInstance";
import { v4 as uuidv4 } from 'uuid';

export default class TodoServices {
  constructor(todos, setTodos) {
    this.setTodos = setTodos;
    this.todos = Object.freeze(todos);
  }

  updateLocalTodos = (newTodos) => {
    this.setTodos(newTodos);
    this.todos = newTodos;
  }

  replaceLocalTodoById = (id, newTodo) => {
    const newTodos = this.todos.map((todo) => (todo.id === id) ? newTodo : todo);
    this.updateLocalTodos(newTodos);
  }

  // No es necesario pasar el usuario por que la instancia de axios lo tiene como header.
  fetchAllTodos = async () => {
    const { data } = await axios.get('/todo');
    this.updateLocalTodos(data);
  }

  createTodo = async (todo) => {
    // Realizo una actualizacion optimista. Como el server en este momento todavia no respondio, 
    // le asigno una id temporal que react puede usar como key, y luego la remplazo por la id real.
    const tempId = uuidv4();
    todo.id = tempId;
    todo.isDone = false;
    this.updateLocalTodos([todo, ...this.todos]);
    const { data } = await axios.post('/todo', todo);
    todo.id = data.id;
    this.replaceLocalTodoById(tempId, todo);
  }

  deleteTodoById = async ({ id }) => {
    this.updateLocalTodos(this.todos.filter((todo) => todo.id !== id));
    await axios.delete('/todo', { data: { id } });
  }

  updateTodoContentById = async ({ id, newContent }) => {
    console.log(id, newContent)
    const todoToUpdate = this.todos.find((todo) => todo.id === id);
    todoToUpdate.content = newContent;
    this.replaceLocalTodoById(id, todoToUpdate);
    await axios.put('/todo', { id, content: newContent });
  }

  toggleTodoById = async ({ id }) => {
    console.log(this.todos, id)
    const todoToUpdate = this.todos.find((todo) => todo.id === id);
    todoToUpdate.isDone = !todoToUpdate.isDone;
    this.replaceLocalTodoById(id, todoToUpdate);
    await axios.patch('/todo/toggle', { id });
  }
}