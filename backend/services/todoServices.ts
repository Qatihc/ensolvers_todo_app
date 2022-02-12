import TodoRepository from "../repositories/todoRepository";

interface Todo {
  content: string,
  userId: string,
  folderId: string,
}

class TodoServices {
  Todo: TodoRepository;
  constructor(TodoRepository: TodoRepository) {
    this.Todo = TodoRepository;
  }

  create = async (todo: Todo) => {
    const createdTodo = await this.Todo.create(todo);
    return createdTodo;
  }

  toggleDoneById = async (ids: { todoId: string, userId: string }) => {
    const { todoId, userId } = ids;
    /* Check if todo belongs to userId */
    await this.Todo.toggleDoneById(todoId);
  }

  getAllTodosByUserId = async (userId: string) => {
    const todos = await this.Todo.getAllTodosByUserId(userId);
    return todos;
  }

  deleteTodoById = async ({ todoId, userId }:{ todoId: string, userId: string }) => {
    await this.Todo.deleteTodoById(todoId);
  }

  updateTodoContentById = async ({ todoId, userId, content }:{ todoId: string, userId: string, content: string }) => {
    /* Chequear si el todo pertenece al usuario */
    await this.Todo.updateTodoContentById({ id: todoId, content });
  }
}

export default TodoServices;