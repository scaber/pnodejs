const authController = require("./controllers/auth");
const userController = require("./controllers/user");

const authMiddleware = require("./middlewares/auth");
const { checkAuth } = require("./middlewares/auth");

module.exports.set = (app) => {
  app.post("/auth/login", authController.login);
  app.post("/auth/register", authController.register);
  app.get("/users", checkAuth, userController.getUsers);
  app.get("/getUser", checkAuth, userController.getUser);

  //next endpoints require auth
};
