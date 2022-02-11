const UserRepository = require("../repositories/userRepository");
const UserServices = require("../services/userServices");

const userServices = new UserServices(UserRepository);

exports.register = async (req, res, next) => {
  const { username, password } = req.body;
  userServices.register({ username, password });
  res.status(200).send();
}

exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  const token = await userServices.login({ username, password });
  res.send(token)
}