import { Router } from "express";
import FolderRouter from "./folderRoutes";
import TodoRouter from "./todoRoutes";
import UserRouter from "./userRoutes";

const ApiRouter = Router();


ApiRouter.use('/user', UserRouter);
ApiRouter.use('/todo', TodoRouter);
ApiRouter.use('/folder', FolderRouter);

export default ApiRouter;