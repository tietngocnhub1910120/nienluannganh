require("dotenv").config();
const { createError } = require("../utils/err");
const User = require("../models/userModel");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
class AuthController {
  async login(req, res, next) {
    let { email, password } = req.body;
    if (!email || !password) {
      return next(createError(401, "Trường email hoặc mật khẩu bị thiếu!"));
    }
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return next(createError(401, "Tài khoản người dùng không tồn tại!"));
      }
      if (!(await argon2.verify(user.password, password))) {
        return next(createError(401, "Sai mật khẩu!"));
      }

      const accessToken = jwt.sign(
        { userId: user._id, isAdmin: user.admin },
        process.env.ACCESS_TOKEN_SECRET
      );
      delete user.password;
      res.json({
        success: true,
        message: "Đăng nhập thành công!",
        user,
        accessToken,
      });
    } catch (error) {
      next(error);
    }
  }
  async register(req, res, next) {
    const { email, password, comfirmPassword, phone, username } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return next(createError(401, "Email này đã được đăng ký!"));
      }

      if (!email || !password) {
        return next(createError(401, "Trường email hoặc mật khẩu bị thiếu!"));
      }
      if (!phone) {
        return next(createError(401, "Trường số điện thoại bị thiếu!"));
      }
      if (password !== comfirmPassword) {
        return next(createError(401, "Mật khẩu không khớp!"));
      }

      const hashPassword = await argon2.hash(password);
      const newUser = new User({
        email,
        password: hashPassword,
        phone,
        username,
      });
      await newUser.save();
      user = await User.findById(newUser._id).select('-password');
      const accessToken = jwt.sign(
        { userId: user._id, isAdmin: user.admin },
        process.env.ACCESS_TOKEN_SECRET
      );

      res.json({
        success: true,
        message: "Đăng ký thành công!",
        accessToken,
        user,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
