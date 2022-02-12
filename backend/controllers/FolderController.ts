import { Request, Response, NextFunction } from "express";
import FolderRepository from "../repositories/folderRepository";
import FolderServices from "../services/folderServices";

const folderRepository = new FolderRepository();
const folderServices = new FolderServices(folderRepository);

export default class FolderController {
  static create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body;
      const { id: userId } = res.locals.user;
      const createdFolder = await folderServices.create({ name, userId });
      res.status(200).send(createdFolder);
    } catch (err) {
      return next(err);
    }
  }

  static getAllFolders = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id: userId } = res.locals.user;
      const folders = await folderServices.getAllUserFolders(userId);
      res.send(folders)
    } catch (err) {
      return next(err);
    }
  }

  static deleteFolderById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;
      const { id: userId } = res.locals.user;
      folderServices.deleteFolderById({ id, userId });
      res.send();
    } catch (err) {
      return next(err);
    }
  }
}