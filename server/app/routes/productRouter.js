const Router = require("express").Router();
const ProductController = require("../controllers/ProductController");
const { verifyTokenAdmin } = require("../middlewares/authToken");
const multer = require("../utils/multer-cloudinary");

Router.put(
  "/:id/edit",
  verifyTokenAdmin,
  multer.array("images", 6),
  ProductController.editProduct
);
Router.delete("/:id/delete", verifyTokenAdmin, ProductController.deleteProduct);
Router.get("/:id", ProductController.getProduct);
Router.post(
  "/create",
  verifyTokenAdmin,
  multer.array("images", 6),
  ProductController.createProduct
);
Router.get("/", ProductController.getAllProduct);

module.exports = Router;
