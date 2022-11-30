const userService = require("../services/user");

function getUsers(req, res) {
  return userService.getUsers().then((data) => res.send(data));
}

function getUser(req, res) {
  let userName = req.query.userName;
  return userService.getUser(userName).then((data) => res.send(data));
}
module.exports = {
  getUsers,
  getUser,
};
