const Router = require("express").Router();
const UserController = require("../controllers/UserController");

Router.put("/editProfile", UserController.editProfile);
Router.get("/", UserController.getUser);

module.exports = Router;
