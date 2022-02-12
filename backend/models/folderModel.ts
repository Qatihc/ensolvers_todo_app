import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import { sequelize } from "./dbInstance";

class Folder extends Model<InferAttributes<Folder>, InferCreationAttributes<Folder>> {
  declare id: CreationOptional<string>;
  declare name: string;
  declare userId: string;
}

Folder.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  }
}, {
  sequelize
});

Folder.sync({ alter: true });

export default Folder;