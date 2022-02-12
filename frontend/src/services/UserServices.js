import axios from "./axiosInstance";
import PersistToken from "./PersistToken";

export default class UserServices {
  constructor(setCurrentUserToken) {
    this.setCurrentUserToken = setCurrentUserToken;
  }

  login = async ({ username, password }) => {
    const { data } = await axios.post('/user/login', { username, password });
    const { token } = data;
    this.setCurrentUserToken(token);
    PersistToken.setPersistedToken(token);
  }

  register = async ({ username, password }) => {
    await axios.post('/user/register', { username, password });
  }

  logout = () => {
    this.setCurrentUserToken(null);
    PersistToken.deletePersistedToken();
  }
}