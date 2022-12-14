const { User } = require("../models"); // import models
const { Op } = require("sequelize");
const addUser = (user) => User.create(user);
const getUser = (userName) => User.findOne({ where: { userName } });

const getUsers = async (searchText) => {
  const users = User.findAll({
    where: {
      [Op.or]: [
        {
          userName: {
            [Op.like]: "%" + searchText + "%",
          },
        },
        {
          firstName: {
            [Op.like]: "%" + searchText + "%",
          },
        },
        {
          lastName: {
            [Op.like]: "%" + searchText + "%",
          },
        },
      ],
    },
  });
  return users;
};
module.exports = {
  addUser,
  getUsers,
  getUser,
};
