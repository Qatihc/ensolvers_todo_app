import { Router } from "express";
import TodoRouter from "./todoRoutes";
import UserRouter from "./userRoutes";

const ApiRouter = Router();


ApiRouter.use('/user', UserRouter);
ApiRouter.use('/todo', TodoRouter);

export default ApiRouter;