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
Router.post("/addbookmark", verifyToken, UserController.addBookmark);
Router.post("/unbookmark", verifyToken, UserController.unBookmark);

module.exports = Router;
