require("dotenv").config();
const { createError } = require("../utils/err");
const User = require("../models/userModel");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
class AuthController {
  async login(req, res, next) {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(createError(401, "Trường email hoặc mật khẩu bị thiếu!"));
    }
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return next(createError(401, "Tài khoản người dùng không tồn tại!"));
      }
      if (!argon2.verify(user.password, password)) {
        return next(createError(401, "Sai mật khẩu!"));
      }

      const token = jwt.sign(
        { userId: user._id, isAdmin: user.admin },
        process.env.ACCESS_TOKEN_SECRET
      );

      res.json({
        success: true,
        message: "Đăng nhập thành công!",
        token,
      });
    } catch (error) {
      next(error);
    }
  }
  async register(req, res, next) {
    const { email, password, comfirmPassword, phone } = req.body;

    if (!email || !password) {
      return next(createError(401, "Trường email hoặc mật khẩu bị thiếu!"));
    }
    if (!phone) {
      return next(createError(401, "Trường số điện thoại bị thiếu!"));
    }
    if (password !== comfirmPassword) {
      return next(createError(401, "Mật khẩu không khớp!"));
    }
    try {
      const hashPassword = await argon2.hash(password);
      const newUser = new User({
        email,
        password: hashPassword,
        phone,
      });
      await newUser.save();

      const token = jwt.sign(
        { userId: newUser._id, isAdmin: newUser.admin },
        process.env.ACCESS_TOKEN_SECRET
      );

      res.json({
        success: true,
        message: "Đăng ký tài khoản thành công!",
        token,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
