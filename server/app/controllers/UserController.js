require("dotenv").config();
const { createError } = require("../utils/err");
const User = require("../models/userModel");
const cloudinary = require("../utils/cloudinary");

class UserController {
  async getUser(req, res, next) {
    const { userId } = req.user;
    try {
      const user = await User.findById(userId)
        .select("-password")
        .populate("bookmarks");
      if (!user) return next(createError(404, "Người dùng không tồn tài!"));
      res.status(200).json({
        success: true,
        message: "Lấy thông tin tài khoản thành công!",
        user,
      });
    } catch (error) {
      next(error);
    }
  }
  async editProfile(req, res, next) {
    const { userId } = req.user;
    const { phone, address, username } = req.body;
    const file = req.file;

    try {
      let avatar;
      if (file) {
        avatar = await cloudinary.uploader.upload(file.path);
      }

      let user = {
        username,
        phone,
        address,
        avatar: avatar?.secure_url,
      };
      user = await User.findByIdAndUpdate(userId, user, {
        new: true,
      });

      res.json({
        success: true,
        message: "Cập nhật thông tin thành công!",
        user,
      });
    } catch (error) {
      next(error);
    }
  }
  async addBookmark(req, res, next) {
    const { userId } = req.user;
    const { productId } = req.body;
    console.log(productId);

    try {
      await User.findOneAndUpdate(
        { _id: userId },
        { $push: { bookmarks: productId } },
        { new: true }
      );

      res.json({
        success: true,
        message: "Đã lưu!",
      });
    } catch (error) {
      next(error);
    }
  }
  async unBookmark(req, res, next) {
    const { userId } = req.user;
    const { productId } = req.body;
    try {
      const check = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { bookmarks: productId } },
        { new: true }
      );
      console.log(check);
      res.json({
        success: true,
        message: "Đã xóa khỏi danh sách lưu!",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
