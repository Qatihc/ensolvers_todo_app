import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import styled from 'styled-components';

const FolderLink = styled.a`
  transition: all .15s ease-in-out;
  &:hover {
    color: var(--clr-green-1);
  }
`

const FolderItem = ({ folder, navigateToFolder, deleteFolderById, className }) => {
  return (
    <li className={className}>
      <FolderLink onClick={() => navigateToFolder(folder.id)}>{folder.name}</FolderLink>
      <button onClick={() => deleteFolderById({ id: folder.id })}><BsTrashFill /></button>
    </li>
  )
}

export default styled(FolderItem)`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  margin-bottom: var(--size-3);
  &, & svg {
    color: var(--clr-gray-8);
    font-size: var(--size-5);
  }

  & button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;