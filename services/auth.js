const { User } = require("../models"); // import models
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const CustomError = require("../CustomError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authenticate = (params) => {
  return User.findOne({
    where: {
      userName: params.username,
    },
    raw: true,
  }).then((user) => {
    if (!user) throw new CustomError("Authentication failed. User not found.");

    if (!bcrypt.compareSync(params.password || "", user.password))
      throw new CustomError("Authentication failed. Wrong password.");

    const payload = {
      userName: user.username,
      password: user.password,
      id: user.id,
      time: new Date(),
    };

    var token = jwt.sign(payload, config.jwtSecret, {
      expiresIn: config.tokenExpireTime,
    });
    const data = {
      user: user,
      token: token,
    };
    return { user, token };
  });
};

module.exports = {
  authenticate,
};
