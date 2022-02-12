import { Router } from "express";
import FolderController from "../controllers/FolderController";
import UserController from "../controllers/UserController";

const FolderRouter = Router();

FolderRouter.post('/', UserController.requireAuth, FolderController.create);
FolderRouter.get('/', UserController.requireAuth, FolderController.getAllFolders);
FolderRouter.delete('/', UserController.requireAuth, FolderController.deleteFolderById);

export default FolderRouter;