import React, { useState, useEffect } from 'react';
import TodoServices from '../../services/TodoServices';
import FolderServices from '../../services/FolderServices';
import TodoList from '../TodoList/TodoList';
import FolderSelector from '../FolderSelector/FolderSelector';
import { LoadingSpinner } from '../../LoadingSpinner';
import { CurrentFolderNav, ListContainer, TodoFormContainer } from './StyledComponents';
import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom';

const TodoAppContainer = ({ className }) => {
  const [todos, setTodos] = useState([]);
  const [folders, setFolders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { folderId: currentFolderId } = useParams();

  const folderServices = new FolderServices(folders, setFolders);
  const todoServices = new TodoServices(todos, setTodos);

  // Dado que por lo general un usuario no va a tener una gran cantidad de ToDos,
  // para simplificar la logica de data fetching, hago GET de todos los ToDos y luego
  // desde el cliente los filtro segun su categoria.
  useEffect(async () => {
    setIsLoading(true);
    const fetchTodos = todoServices.fetchAllTodos();
    const fetchFolders = folderServices.fetchAllFolders();
    await Promise.all([fetchTodos, fetchFolders]);
    setIsLoading(false);
  }, []);
  
  const isFolderSelected = !!currentFolderId;

  const currentFolderName = folders.find((folder) => folder.id === currentFolderId)?.name;
  const currentFolderTodos = todos.filter((todo) => todo.folderId === currentFolderId);

  let currentList = (isFolderSelected ? 
    <TodoList 
      todos={currentFolderTodos}
      currentFolderId={currentFolderId}
      todoServices={todoServices}
    /> :
    <FolderSelector
      folders={folders}
      folderServices={folderServices}
    />
  )

  const navigateToFolderIndex = () => {
    navigate('/folder');
  }

  return (
    <div className={className}>
      <CurrentFolderNav>
        <h1>
          <a onClick={navigateToFolderIndex}>Carpetas</a>
          {isFolderSelected && <span>{' > ' + currentFolderName}</span>}
        </h1>
      </CurrentFolderNav>
      <ListContainer>
        {isLoading ? <LoadingSpinner/> : currentList}
      </ListContainer>
    </div>
  )
}

export default styled(TodoAppContainer)`
  grid-row: 2;
  grid-column: 3;
  margin: 0 auto;
  margin-top: var(--size-7);
  border: 3px solid var(--clr-orange-3);
  background-color: var(--clr-gray-1);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: fit-content;
`;