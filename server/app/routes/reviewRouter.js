const Router = require("express").Router();
const ReviewController = require("../controllers/ReviewController");
const { verifyToken } = require("../middlewares/authToken");

Router.put("/reviewId", verifyToken, ReviewController.editReview);
Router.delete("/reviewId", verifyToken, ReviewController.deleteReview);
Router.post("/", verifyToken, ReviewController.createReview);
Router.get("/productId", ReviewController.getReviews);

module.exports = Router;
