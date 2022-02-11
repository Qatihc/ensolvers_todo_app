const { DataTypes } = require("sequelize/types");
const { sequelize } = require("./dbInstance");

const Todo = sequelize.define('Todo', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
})

Todo.sync({ alter: true });

module.exports = Todo;