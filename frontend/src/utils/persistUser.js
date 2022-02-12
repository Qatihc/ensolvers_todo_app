const saveCurrentUser = (currentUser) => {
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

const getCurrentUser = () => {
  let currentUser = localStorage.getItem('currentUser');
  currentUser = currentUser && JSON.parse(currentUser);
  return {
    token: currentUser?.token
  }
}

const deleteCurrentUser = () => {
  localStorage.removeItem('currentUser');
}

export default { saveCurrentUser, getCurrentUser, deleteCurrentUser };