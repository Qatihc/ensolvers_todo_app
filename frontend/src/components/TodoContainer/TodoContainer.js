import React, { useState, useEffect, useMemo } from 'react';
import TodoServices from '../../services/TodoServices';
import FolderServices from '../../services/FolderServices';
import TodoList from '../TodoList/TodoList';
import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom';
import FolderSelector from '../FolderSelector/FolderSelector';
import CreateFolderForm from '../CreateFolderForm/CreateFolderForm';
import CreateTodoForm from '../CreateTodoForm/CreateTodoForm';
import { ListContainer } from './StyledComponents';
import { LoadingSpinner } from '../../LoadingSpinner';

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

  const navigateToFolderSelector = () => {
    navigate('/folder');
  }

  const isFolderSelected = !!folderId;
  const currentFolderName = folders.find((folder) => folder.id === folderId)?.name;
  const filteredTodos = todos.filter((todo) => todo.folderId === folderId);
  
  return (
    <div className={className}>
      <nav>
        <h1>
          <a onClick={navigateToFolderSelector}>Folders</a>
          {isFolderSelected && <span>{' > ' + currentFolderName}</span>}
        </h1>
      </nav>
      <div>
        {isFolderSelected ? 
          <CreateTodoForm 
            createTodo={todoServices.createTodo}
            folderId={folderId}
          /> :
          <CreateFolderForm 
            createFolder={folderServices.createFolder}
          />
        }
      </div>
      <ListContainer>
        {isLoading && <LoadingSpinner/>}
        {isFolderSelected ?
          <TodoList 
            todos={filteredTodos}
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
`;