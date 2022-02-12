import { Router } from "express";
import TodoController from "../controllers/TodoController";
import UserController from "../controllers/UserController";

const TodoRouter = Router();

TodoRouter.post('/', UserController.requireAuth, TodoController.create);
TodoRouter.patch('/toggle', UserController.requireAuth, TodoController.toggleTodoById);
TodoRouter.put('/', UserController.requireAuth, TodoController.updateTodoContentById);
TodoRouter.delete('/', UserController.requireAuth, TodoController.deleteTodoById);
TodoRouter.get('/', UserController.requireAuth, TodoController.getAllTodos);
TodoRouter.get('/:folderId', UserController.requireAuth, TodoController.getTodosByFolder);

export default TodoRouter;