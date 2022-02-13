import { literal } from "sequelize";
import { Todo } from "../models";

class TodoRepository {
  create = async (todo: { userId: string, content: string, folderId: string }) => {
    const response = await Todo.create(todo);
    const { id, isDone, content } = response;
    return { id, isDone, content };
  }

  getAllTodosByUserId = async (userId: string) => {
    const response = await Todo.findAll({
      where: { userId },
      order: [['createdAt', 'DESC']],
      raw: true 
    });
    return response;
  }

  getTodosByFolder = async (folderId: string) => {
    const response = await Todo.findAll({
      where: { folderId },
      order: [['createdAt', 'DESC']],
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