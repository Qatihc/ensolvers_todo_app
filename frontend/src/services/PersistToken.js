export default class PersistToken {
  static setPersistedToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
  }
  
  static getPersistedToken = () => {
    const persistedToken = localStorage.getItem('token');
    return persistedToken && JSON.parse(persistedToken);
  }
  
  static deletePersistedToken = () => {
    localStorage.removeItem('token');
  }
}
