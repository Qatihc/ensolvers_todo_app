import FolderRepository from "../repositories/folderRepository";

class FolderServices {
  Folder: FolderRepository;
  constructor(FolderRepository: FolderRepository) {
    this.Folder = FolderRepository;
  }

  getAllUserFolders = async (userId: string) => {
    const response = await this.Folder.getAllUserFolders(userId);
    return response;
  }

  create = async (folder: { name: string, userId: string }) => {
    const response = await this.Folder.create(folder);
    return response;
  }

  deleteFolderById = async ({ id, userId }:{ id: string, userId: string})=> {
    /* CHEQUEAR SI LA CARPETA QEU QUIERE BORRAR ES DEL USUARIO!!! */
    await this.Folder.deleteFolderById(id);
  }
}

export default FolderServices;