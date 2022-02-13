import TodoRepository from "../repositories/todoRepository";

interface Todo {
  content: string,
  userId: string,
  folderId: string,
}

// En la mayoria de los servicios que modifican o eliminan un objeto falta comprobar si el todo
// que estamos modificando pertenece o no al usuario, y si no lo hiciera devolver un error.
// Asi como esta implementado ahora un usuario puede modificar los objetos de otro usuario sin problema.

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
    await this.Todo.toggleDoneById(todoId);
  }

  getAllTodosByUserId = async (userId: string) => {
    const todos = await this.Todo.getAllTodosByUserId(userId);
    return todos;
  }

  getTodosByFolderId = async ({ folderId, userId }:{ folderId: string, userId: string }) => {
    const response = await this.Todo.getTodosByFolder(folderId);
    return response;
  }

  deleteTodoById = async ({ todoId, userId }:{ todoId: string, userId: string }) => {
    await this.Todo.deleteTodoById(todoId);
  }

  updateTodoContentById = async ({ todoId, userId, content }:{ todoId: string, userId: string, content: string }) => {
    await this.Todo.updateTodoContentById({ id: todoId, content });
  }
}

export default TodoServices;