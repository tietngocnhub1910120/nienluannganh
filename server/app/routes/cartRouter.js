const Router = require("express").Router();
const CartController = require("../controllers/CartController");
const { verifyToken } = require("../middlewares/authToken");

Router.post("/:productId/add", verifyToken, CartController.addToCart);
Router.delete("/:productId/remove", verifyToken, CartController.removeFromCart);
Router.put("/:productId/update", verifyToken, CartController.updateCart);
Router.get("/", verifyToken, CartController.getCart);

module.exports = Router;
