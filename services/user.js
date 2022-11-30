const { User } = require("../models"); // import models

const addUser = (user) => User.create(user);
const getUser = (userName) => User.findOne({ where: { userName } });

const getUsers = async () => {
  const users = await User.findAll();
  return users;
};
module.exports = {
  addUser,
  getUsers,
  getUser,
};
