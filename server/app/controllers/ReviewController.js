require("dotenv").config();
const { createError } = require("../utils/err");
const Review = require("../models/reviewModel");

class ReviewController {
  async editReview(req, res, next) {
    const reviewId = req.params.reviewId;
    const userId = req.user.userId;
    const { content, start } = req.body;
    try {
      let updatedReview = {
        content,
        start,
      };
      updatedReview = await Review.findOneAndUpdate(
        { _id: reviewId, userId },
        updatedReview,
        { new: true }
      );

      res.status(200).json({
        success: true,
        message: "Đã xóa đánh giá thành công!",
        updatedReview,
      });
    } catch (error) {
      next(error);
    }
  }
  async deleteReview(req, res, next) {
    const reviewId = req.params.reviewId;
    const userId = req.user.userId;

    try {
      const deletedReview = await Review.deleteOne({ _id: reviewId, userId });

      res.status(200).json({
        success: true,
        message: "Đã xóa đánh giá thành công!",
        deletedReview,
      });
    } catch (error) {
      next(error);
    }
  }
  async createReview(req, res, next) {
    const productId = req.params.productId;
    const userId = req.user.userId;
    const { content, start } = req.body;

    if (!content) {
      return next(createError(400, "Trường nội dung bị bỏ trống!"));
    }
    try {
      const newReview = new Review({
        productId,
        userId,
        content,
        start: start || 5,
      });

      await newReview.save();

      res.status(200).json({
        success: true,
        message: "Đã đánh giá thành công!",
        newReview,
      });
    } catch (error) {
      next(error);
    }
  }
  async getReviews(req, res, next) {
    const productId = req.params.productId;
    try {
      const reviews = await Review.find({ productId });

      res.status(200).json({
        success: true,
        message: "Lấy danh sách đánh giá thành công!",
        reviews,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ReviewController();
