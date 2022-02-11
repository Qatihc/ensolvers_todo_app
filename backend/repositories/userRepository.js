const User = require("../models/userModel");

class UserRepository {
  static create = async (user) => {
    const response = await User.create(user);
    return response.dataValues;
  }

  static findByUsername = async (username) => {
    const response = await User.findOne({ where: { username } });
    return response.dataValues;
  }
}

module.exports = UserRepository;