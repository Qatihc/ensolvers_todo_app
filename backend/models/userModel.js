const { DataTypes } = require("sequelize");
const { sequelize } = require("./dbInstance");

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

User.sync({ alter: true });

module.exports = User;