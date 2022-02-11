import User from "../models/userModel";

class UserRepository {
  create = async (user: { username: string, password: string }) => {
    const response = await User.create(user);
    return;
  }

  findByUsername = async (username: string) => {
    const response = await User.findOne({ where: { username } });
    if (!response) return null;
    const { id, password } = response;
    return { id, username, password };
  }
}

export default UserRepository;