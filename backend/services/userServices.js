class UserServices {
  constructor(UserRepository) {
    this.User = UserRepository;
  }

  register = async (user) => {
    const res = await this.User.create(user);
    return res;
  }

  login = async (user) => {
    const { username, password } = user;
    const foundUser = await this.User.findByUsername(username);
    if (!foundUser || foundUser.password !== password) {
      console.log('wrong user or password');
    }

    return foundUser;
  }
}

module.exports = UserServices;