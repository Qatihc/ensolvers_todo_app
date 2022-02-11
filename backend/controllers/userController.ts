import { Request, Response, NextFunction } from "express";
import UserRepository from "../repositories/userRepository";
import UserServices from "../services/userServices";

const userRepository = new UserRepository();
const userServices = new UserServices(userRepository);

export default class UserController {
  static register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;
      await userServices.register({ username, password });
      res.status(200).send();
    } catch (err) {
      return next(err);
    }
  }

  static login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;
      const token = await userServices.login({ username, password });
      res.send({ token })
    } catch (err) {
      return next(err);
    }
  }
}