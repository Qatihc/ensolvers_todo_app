import React from 'react';
import { useNavigate } from 'react-router-dom';
import CreateFolderForm from '../CreateElementForms/CreateFolderForm';
import FolderItem from '../FolderItem/FolderItem';
import { TodoFormContainer } from '../TodoAppContainer/StyledComponents';

const FolderSelector = ({ folders, folderServices, className }) => {
  const { createFolder, deleteFolderById } = folderServices;

  const navigate = useNavigate();
  const navigateToFolder = (id) => {
    navigate(`${id}`);
  }

  return (
    <main>
      <TodoFormContainer>
        <CreateFolderForm 
          createFolder={createFolder}
        />
      </TodoFormContainer>
      <ul className={className}>
        {folders.map((folder) => 
          <FolderItem
            key={folder.id}
            folder={folder} 
            navigateToFolder={navigateToFolder}
            deleteFolderById={deleteFolderById}
          />
        )}
      </ul>
    </main>
  )
}

export default FolderSelector;