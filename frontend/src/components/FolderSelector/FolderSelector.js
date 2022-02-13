import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FolderSelector = ({ folders, deleteFolderById }) => {
  const navigate = useNavigate();
  const navigateToFolder = (id) => {
    navigate(`${id}`);
  }

  return (
    <>
      <ul>
        {folders.map((folder) => 
          <li key={folder.id}>
            <a onClick={() => navigateToFolder(folder.id)}>{folder.name}</a>
            <button onClick={() => deleteFolderById({ id: folder.id })}> Delete </button>
          </li>
        )}
      </ul>
    </>
  )
}

export default FolderSelector;