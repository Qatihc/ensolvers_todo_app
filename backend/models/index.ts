import Folder from "./folderModel";
import Todo from "./todoModel";
import User from "./userModel";


/* Todo.belongsTo(User, { foreignKey: 'userId', targetKey: 'id'});

Folder.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });

Folder.hasMany(Todo, { 
  foreignKey: {
    name: 'folderId',
    allowNull: false,
  },
  onDelete: 'cascade',
});
 */
/* 
Folder.hasMany(Todo, { foreignKey: 'folderId'});
User.hasMany(Folder, { foreignKey: 'userId' });
User.hasMany(Todo, { foreignKey: 'userId' });

Todo.belongsTo(User, { onDelete: 'CASCADE' });
Folder.belongsTo(User);
Todo.belongsTo(Folder); */

export { Folder, Todo, User };