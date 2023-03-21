const Router = require("express").Router();
const UserController = require("../controllers/UserController");
const { verifyToken } = require("../middlewares/authToken");
const upload = require("../utils/multer");
Router.put(
  "/",
  verifyToken,
  upload.single("avatar"),
  UserController.editProfile
);
Router.get("/", verifyToken, UserController.getUser);

module.exports = Router;
