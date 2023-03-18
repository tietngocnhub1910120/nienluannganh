const { createError } = require("../utils/err");
const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const authToken = req.headers["authorization"];
  const token = authToken && authToken.split(" ")[1];

  if (!token) {
    const err = createError(401, "Người dùng chưa đăng nhập!");
    return next(err);
  }

  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

const verifyTokenAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (!req.user.isAdmin) {
      return next(createError(401, "Không có quyền quản trị"));
    }
    next();
  });
};

module.exports = {
  verifyToken,
  verifyTokenAdmin,
};
