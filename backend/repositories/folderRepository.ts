import { Folder } from "../models";

class FolderRepository {
  getAllUserFolders = async (userId: string) => {
    const response = await Folder.findAll({
      where: { userId },
      
      raw: true
    })

    return response;
  }

  create = async (folder: { name: string, userId: string }) => {
    const { name, id } = await Folder.create(folder);
    return { name, id };
  }

  deleteFolderById = async (id: string) => {
    await Folder.destroy({ where: { id }});
  }
}

export default FolderRepository;