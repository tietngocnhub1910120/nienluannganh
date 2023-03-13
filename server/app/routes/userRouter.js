const Router = require("express").Router();
const UserController = require("../controllers/UserController");
const { verifyToken } = require("../middlewares/authToken");
const multer = require("../utils/multer-cloudinary");
Router.put(
  "/editprofile",
  verifyToken,
  multer.single("avatar"),
  UserController.editProfile
);
Router.get("/", verifyToken, UserController.getUser);

module.exports = Router;
