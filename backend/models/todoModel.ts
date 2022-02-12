import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import { sequelize } from "./dbInstance";
import User from "./userModel";

class Todo extends Model<InferAttributes<Todo>, InferCreationAttributes<Todo>> {
  declare id: CreationOptional<string>;
  declare content: string;
  declare isDone: CreationOptional<boolean>;
  declare userId: string;
  declare folderId: string;
}

Todo.init({
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
  },
  userId: {
    type: DataTypes.UUID,
  },
  folderId: {
    type: DataTypes.UUID,
  }
}, {
  sequelize
});


Todo.sync({ alter: true });

export default Todo;