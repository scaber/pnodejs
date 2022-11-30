const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authService = require("../services/auth");
const userService = require("../services/user");

function login(req, res) {
  return authService
    .authenticate(req.body)
    .then((data) => {
      res.send({
        success: true,
        data: data,
      });
    })
    .catch((err) => {
      if (err.type === "custom") {
        return res.send({
          success: false,
          message: err.message,
        });
      }
      return res.send({
        success: false,
        message: "Authentication failed. Unexpected Error.",
      });
    });
}

function register(req, res) {
  var userName = req.body.userName;
  return userService.getUser(req.body.userName || "").then((exists) => {
    if (exists) {
      return res.send({
        success: false,
        message:
          "Registration failed. User with this username already registered.",
      });
    }

    var user = {
      userName: req.body.userName,
      password: bcrypt.hashSync(req.body.password, config.saltRounds),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      role: "users",
    };

    return userService.addUser(user).then(() => res.send({ success: true }));
  });
}

module.exports = {
  login,
  register,
};
