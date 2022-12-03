const express = require("express"); // import express
const { sequelize, User } = require("./models"); // import models
var rfs = require("rotating-file-stream"); // version 2.x
var morgan = require("morgan");
var path = require("path");
const router = require("./routes");
var cors = require("cors");
const app = express(); // create a new express app
app.use(express.json());

var accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "log"),
});

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));
app.use(cors());
// app.get("/", function (req, res) {
//   res.send("App running");
// });

// app.post("/users", async (req, res) => {
//   const { firstName, lastName, role } = req.body;
//   try {
//     const user = await User.create({ firstName, lastName, role });
//     return res.json(user);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json(err);
//   }
// });
// //Fetch users

router.set(app);

app.listen({ port: 3001 }, async () => {
  console.log("server running on http://localhost:3001");
  //await sequelize.sync({force: true}); //This creates the table, dropping them first if they already existed
  await sequelize.authenticate();
});
