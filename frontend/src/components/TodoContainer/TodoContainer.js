import React, { useState, useEffect, useMemo } from 'react';
import TodoServices from '../../services/TodoServices';
import FolderServices from '../../services/FolderServices';
import TodoList from '../TodoList/TodoList';
import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom';
import FolderSelector from '../FolderSelector/FolderSelector';
import CreateFolderForm from '../CreateFolderForm/CreateFolderForm';
import CreateTodoForm from '../CreateTodoForm/CreateTodoForm';
import { LoadingSpinner } from '../../LoadingSpinner';

const ListContainer = styled.main`
  position: relative;
  padding: var(--size-6);
  height: 70vh;
  width: min(90vw, var(--size-17));
  overflow-y: auto;
`

const TodoFormContainer = styled.div`
  padding: 0 var(--size-6);
`

const CurrentFolderNav = styled.nav`
  padding: var(--size-6);
`

const TodoContainer = ({ className }) => {
  const [todos, setTodos] = useState([]);
  const [folders, setFolders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { folderId } = useParams();

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

  const navigateToFolderIndex = () => {
    navigate('/folder');
  }

  const isFolderSelected = !!folderId;
  const currentFolderName = folders.find((folder) => folder.id === folderId)?.name;
  const currentFolderTodos = todos.filter((todo) => todo.folderId === folderId);
  
  return (
    <div className={className}>
      <CurrentFolderNav>
        <h1>
          <a onClick={navigateToFolderIndex}>Carpetas</a>
          {isFolderSelected && <span>{' > ' + currentFolderName}</span>}
        </h1>
      </CurrentFolderNav>
      <TodoFormContainer>
        {isFolderSelected ? 
          <CreateTodoForm 
            createTodo={todoServices.createTodo}
            folderId={folderId}
          /> :
          <CreateFolderForm 
            createFolder={folderServices.createFolder}
          />
        }
      </TodoFormContainer>
      <ListContainer>
        {isLoading && <LoadingSpinner/>}
        {isFolderSelected ?
          <TodoList 
            todos={currentFolderTodos}
            todoServices={todoServices}
          /> :
          <FolderSelector
            folders={folders}
            deleteFolderById={folderServices.deleteFolderById}
          />
        }
      </ListContainer>
    </div>
  )
}

export default styled(TodoContainer)`
  grid-row: 2;
  grid-column: 3;
  margin: 0 auto;
  margin-top: var(--size-7);
  border: 3px solid var(--clr-orange-3);
  background-color: var(--clr-gray-1);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: fit-content;
`;