import Folder from "./folderModel";
import Todo from "./todoModel";
import User from "./userModel";


Folder.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });
User.hasMany(Folder, { foreignKey: 'folders' });

Todo.belongsTo(Folder, { foreignKey: 'folderId', targetKey: 'id' });
Folder.hasMany(Todo, { 
  foreignKey: {
    name: 'todos',
    allowNull: false,
  },
  onDelete: 'cascade',
});

export { Folder, Todo, User };