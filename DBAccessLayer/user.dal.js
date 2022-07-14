const User = require("../model/user.model");

const findUser = async (data) => {
  const user = await User.findById(data);
  return user;
};

const storeUser = async (userToStore) => {
  const storedUser = await User.create(userToStore);
  return storedUser;
};

const findUserByUsername = async (username) => {
  const user = await User.findOne(username);
  return user;
};

module.exports = {
  findUser,
  storeUser,
};
