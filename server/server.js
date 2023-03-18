require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./app/utils/connectDB");
const { createError } = require("./app/utils/err");
connectDB();

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/auth", require("./app/routes/authRouter"));
app.use("/api/user", require("./app/routes/userRouter"));
app.use("/api/product", require("./app/routes/productRouter"));
app.use("/api/cart", require("./app/routes/cartRouter"));
app.use("/api/order", require("./app/routes/orderRouter"));
app.all("*", (req, res, next) => {
  next(createError(404, "không tìm thấy nguồn"));
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app listening http://localhost:${port}`);
});
