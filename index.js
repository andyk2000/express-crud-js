const express = require("express");
const bodyParser = require("body-parser");
const config = require("./app.config");
const { Sequelize } = require("sequelize");
const Users = require("./models/Users");
const { Service } = require("./models/Services");
const Stores = require("./models/Stores");
// const { Users }  = require("./controller/UserController");
const UserController = require("./controller/UserController");
const StoreController = require("./controller/StoreController");

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
Stores.initialise(sequelize);

sequelize.sync({alter: true}).then(() => {
    console.log("table synched")
})

//user crud
app.post("/", UserController.createUser);
app.get("/", UserController.getAllUsers);
app.delete("/:id", UserController.deleteUser);
app.get("/users/:id", UserController.getByID);
// app.post("/:id", UserController.updateUser);

//stores crud
app.post("/stores", StoreController.createStore);
app.get("/stores", StoreController.getAllStores);
app.delete("/stores/:id", StoreController.deleteStore);
app.get("/stores/:id", StoreController.getByID);
app.put("/stores/:id", StoreController.updateStore);
//get store by owner_id
app.get("/stores/owner/:id", StoreController.getStoreByOwner);


app.listen(config.port, () => {
    console.log(`api app running on port: ${config.port}`);
})