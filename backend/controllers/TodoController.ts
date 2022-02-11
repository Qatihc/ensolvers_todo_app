import { Request, Response, NextFunction } from "express";
import TodoRepository from "../repositories/todoRepository";
import TodoServices from "../services/todoServices";

const todoRepository = new TodoRepository();
const todoServices = new TodoServices(todoRepository);

export default class TodoController {
  static create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id: userId } = res.locals.user;
      const { content } = req.body;
      await todoServices.create({ content, userId });
      return res.send();
    } catch (err) {
      return next(err);
    }
  }

  static getAllTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = res.locals.user;
      const todos = await todoServices.getAllTodosByUserId(id);
      res.send(todos)
    } catch (err) {
      return next(err);
    }
  }

  static toggleTodoById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId } = res.locals.user;
      const { id } = req.body;
      await todoServices.toggleDoneById({ todoId: id, userId });
      return res.send();
    } catch (err) {
      return next(err);
    }
  }

  static deleteTodoById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId } = res.locals.user;
      const { id } = req.body;
      await todoServices.deleteTodoById({ todoId: id, userId });
      return res.send();
    } catch (err) {
      return next(err);
    }
  }

  static updateTodoContentById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId } = res.locals.user;
      const { id, content } = req.body;
      await todoServices.updateTodoContentById({ todoId: id, userId, content });
      return res.send();
    } catch (err) {
      return next(err);
    }
  }

}