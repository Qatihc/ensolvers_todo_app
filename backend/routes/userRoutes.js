const { 
  register,
  login
} = require('../controllers/userController');

const UserRouter = require('express').Router();

UserRouter.post('/register', register);
UserRouter.post('/login', login);

module.exports = UserRouter;