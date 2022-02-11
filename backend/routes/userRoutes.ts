import { Router } from "express";
import UserController from "../controllers/UserController";

const UserRouter = Router();

UserRouter.post('/register', UserController.register);
UserRouter.post('/login', UserController.login);

export default UserRouter;