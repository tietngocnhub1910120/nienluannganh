require("dotenv").config();
const { createError } = require("../utils/err");
const User = require("../models/userModel");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
class UserController {
  getUser(req, res, next) {
    res.json({
      success: true,
      message: "Login",
    });
  }
  editProfile(req, res, next) {
    res.json({
      success: true,
      message: "Login",
    });
  }
}

module.exports = new UserController();
