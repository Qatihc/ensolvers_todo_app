import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FolderLink = styled.a`
  font-size: var(--size-5);
`


const FolderSelector = ({ folders, deleteFolderById, className }) => {
  const navigate = useNavigate();
  const navigateToFolder = (id) => {
    navigate(`${id}`);
  }

  return (
    <>
      <ul className={className}>
        {folders.map((folder) => 
          <li key={folder.id}>
            <FolderLink onClick={() => navigateToFolder(folder.id)}>{folder.name}</FolderLink>
            <button onClick={() => deleteFolderById({ id: folder.id })}> Delete </button>
          </li>
        )}
      </ul>
    </>
  )
}

export default styled(FolderSelector)`
`;