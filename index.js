const express = require("express");
const bodyParser = require("body-parser");
const config = require("./app.config");
const { Sequelize } = require("sequelize");
const Users = require("./models/Users");
const { Service } = require("./models/Services");
const { Store } = require("./models/Stores");
// const { Users }  = require("./controller/UserController");
const UserController = require("./controller/UserController");

const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const sequelize = new Sequelize("urubutoService", "postgres", 'Ny@bibuye30', {
    host: 'localhost',
    dialect: 'postgres'})

Users.initialise(sequelize);

sequelize.sync({alter: true}).then(() => {
    console.log("table synched")
})

app.post("/", UserController.createUser);
app.get("/", UserController.getAllUsers);
app.delete("/:id", UserController.deleteUser);
app.get("/:id", UserController.getByID);
app.post("/:id", UserController.updateUser);

app.listen(config.port, () => {
    console.log(`api app running on port: ${config.port}`);
})