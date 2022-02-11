const ApiRouter = require('express').Router();

const UserRouter = require("./userRoutes");
const TodoRouter = require("./todoRoutes");

ApiRouter.use('/user', UserRouter);
ApiRouter.use('/todo', TodoRouter);

module.exports = ApiRouter;