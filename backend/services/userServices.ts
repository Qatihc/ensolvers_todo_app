import InputError from "../errors/InputError";
import UserRepository from "../repositories/userRepository";
import jwt from "jsonwebtoken";

interface User {
  username: string,
  password: string
}

class UserServices {
  User: UserRepository;
  constructor(UserRepository: UserRepository) {
    this.User = UserRepository;
  }

  register = async (user: User) => {
    const isUsernameAlreadyInUse = await this.isUsernameAlreadyInUse(user.username);
    if (isUsernameAlreadyInUse) throw new InputError('Username already in use');
    await this.User.create(user);
    return;
  }

  login = async (user: User) => {
    const { username, password } = user;
    const foundUser = await this.User.findByUsername(username);
    if (!foundUser || foundUser.password !== password) {
      throw new InputError('Invalid username or password')
    }

    const { id } = foundUser;
    const token = jwt.sign({ id }, process.env.JWT_SECRET as string);
    return token;
  }

  isUsernameAlreadyInUse = async (username: string) => {
    const foundUser = await this.User.findByUsername(username);
    console.log(foundUser);
    return !!foundUser;
  }
}

export default UserServices;