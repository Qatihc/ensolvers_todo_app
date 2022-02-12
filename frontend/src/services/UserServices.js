import axios from "./axiosInstance";

export default class UserServices {
  constructor(setCurrentUserToken) {
    this.setCurrentUserToken = setCurrentUserToken;
  }

  login = async ({ username, password }) => {
    const { data } = await axios.post('/user/login', { username, password });
    this.setCurrentUserToken(data);
    console.log(data);
    return data;
  }

  register = async ({ username, password }) => {
    const { data } = await axios.post('/user/register', { username, password });
  }
}