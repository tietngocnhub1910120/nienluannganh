const Router = require("express").Router();
const OrderController = require("../controllers/OrderController");
const { verifyToken, verifyTokenAdmin } = require("../middlewares/authToken");

Router.put(
  "/:orderId/update",
  verifyTokenAdmin,
  OrderController.updateStatusOrder
);
Router.get("/:orderId/private", verifyToken, OrderController.getOrderPrivate);
Router.get("/private", verifyToken, OrderController.getAllOrderPrivate);

Router.post("/create", verifyToken, OrderController.createOrder);

Router.get("/:orderId", verifyTokenAdmin, OrderController.getOrder);
Router.get("/", verifyTokenAdmin, OrderController.getAllOrder);

module.exports = Router;
