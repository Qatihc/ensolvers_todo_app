import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CreateFolderForm from '../CreateFolderForm/CreateFolderForm';

const FolderSelector = ({ folders, folderServices }) => {
  const navigate = useNavigate();
  const navigateToFolder = (id) => {
    navigate(`${id}`);
  }

  return (
    <>
      <ul>
        {folders.map((folder) => 
          <li onClick={() => navigateToFolder(folder.id)} key={folder.id}>{folder.name}</li>
        )}
      </ul>
    </>
  )
}

export default FolderSelector;