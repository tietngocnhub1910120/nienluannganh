const Router = require("express").Router();
const ReviewController = require("../controllers/ReviewController");
const { verifyToken, verifyTokenAdmin } = require("../middlewares/authToken");

Router.put("/:reviewId", verifyToken, ReviewController.editReview);
Router.delete("/:reviewId", verifyToken, ReviewController.deleteReview);
Router.post("/:productId", verifyToken, ReviewController.createReview);
Router.get("/:productId", ReviewController.getReviews);
Router.get("/", verifyTokenAdmin, ReviewController.getAllReview);

module.exports = Router;
