import TodoRepository from "../repositories/todoRepository";

interface Todo {
  content: string,
  userId: string
}

class TodoServices {
  Todo: TodoRepository;
  constructor(TodoRepository: TodoRepository) {
    this.Todo = TodoRepository;
  }

  create = async (todo: Todo) => {
    const response = await this.Todo.create(todo);
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
}

export default TodoServices;