const Router = require("express").Router();
const AuthController = require("../controllers/AuthController");

Router.post("/login", AuthController.login);
Router.post("/register", AuthController.register);

module.exports = Router;
