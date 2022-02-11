import { literal } from "sequelize";
import Todo from "../models/todoModel";

class TodoRepository {
  create = async (todo: { userId: string, content: string }) => {
    const response = await Todo.create(todo);
    const { id, isDone, content } = response;
    return { id, isDone, content };
  }

  getAllTodosByUserId = async (userId: string) => {
    const response = await Todo.findAll({
      where: { userId },
      raw: true 
    });
    return response;
  }

  toggleDoneById = async (id: string) => {
    await Todo.update(
      { isDone: literal('NOT "isDone"') },
      { where: { id } }
    )
  }

  deleteTodoById = async (id: string) => {
    await Todo.destroy({
      where: { id }
    })
  }

  updateTodoContentById = async ({ id, content }:{ id: string, content: string}) => {
    await Todo.update(
      { content },
      { where: { id } }
    )
  }
}

export default TodoRepository;