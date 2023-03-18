const Router = require("express").Router();
const ProductController = require("../controllers/ProductController");
const { verifyTokenAdmin } = require("../middlewares/authToken");
const upload = require("../utils/multer");

Router.put(
  "/:id/edit",
  verifyTokenAdmin,
  upload.array("images", 6),
  ProductController.editProduct
);
Router.delete("/:id/delete", verifyTokenAdmin, ProductController.deleteProduct);
Router.get("/:id", ProductController.getProduct);
Router.post(
  "/create",
  // verifyTokenAdmin,
  upload.array("images", 6),
  ProductController.createProduct
);
Router.get("/", ProductController.getAllProduct);

module.exports = Router;
