import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CreateFolderForm from '../CreateFolderForm/CreateFolderForm';
import { TodoFormContainer } from '../TodoContainer/StyledComponents';

const FolderLink = styled.a`
  font-size: var(--size-5);
`

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
          <li key={folder.id}>
            <FolderLink onClick={() => navigateToFolder(folder.id)}>{folder.name}</FolderLink>
            <button onClick={() => deleteFolderById({ id: folder.id })}> Delete </button>
          </li>
        )}
      </ul>
    </main>
  )
}

export default styled(FolderSelector)`
`;