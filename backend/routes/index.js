const ApiRouter = require('express').Router();

const AuthRouter = require("./authRoutes");
const TodoRouter = require("./todoRoutes");

ApiRouter.use('/auth', AuthRouter);
TodoRouter.use('/todo', TodoRouter);

module.exports = ApiRouter;