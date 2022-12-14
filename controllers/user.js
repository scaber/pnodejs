const userService = require("../services/user");

function getUsers(req, res) {
  let searchText = req.query.searchText;
  return userService.getUsers(searchText).then((data) => res.send(data));
}

function getUser(req, res) {
  let userName = req.query.userName;
  return userService.getUser(userName).then((data) => res.send(data));
}
module.exports = {
  getUsers,
  getUser,
};
