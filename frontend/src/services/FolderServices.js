import axios from "./axiosInstance";
import { v4 as uuidv4 } from 'uuid';

export default class FolderServices {
  constructor(folders, setFolders) {
    this.setFolders = setFolders;
    this.folders = Object.freeze(folders);
  }

  updateLocalFolders = (newFolders) => {
    this.setFolders(newFolders);
    this.folders = newFolders;
  }

  replaceLocalFolderById = (id, newFolder) => {
    const newFolders = this.folders.map((folder) => (folder.id === id) ? newFolder : folder);
    this.updateLocalFolders(newFolders);
  }

  fetchAllFolders = async () => {
    const { data } = await axios.get('/folder');
    this.updateLocalFolders(data);
  }

  createFolder = async (folder) => {
    const tempId = uuidv4();
    folder.id = tempId;
    this.updateLocalFolders([folder, ...this.folders]);
    const { data } = await axios.post('/folder', folder);
    folder.id = data.id;
    this.replaceLocalFolderById(tempId, folder);
  }

  deleteFolderById = async ({ id }) => {
    this.updateLocalFolders(this.folders.filter((folder) => folder.id !== id));
    await axios.delete('/folder', { data: { id } });
  }
}