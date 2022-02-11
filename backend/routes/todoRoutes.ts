import { Router } from "express";
import TodoController from "../controllers/TodoController";
import UserController from "../controllers/UserController";

const TodoRouter = Router();

TodoRouter.post('/', UserController.requireAuth, TodoController.create);
TodoRouter.get('/', UserController.requireAuth, TodoController.getAllTodos);
TodoRouter.patch('/toggle', UserController.requireAuth, TodoController.toggleTodoById);

export default TodoRouter;