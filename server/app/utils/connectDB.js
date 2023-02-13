require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
module.exports = () => {
  try {
    mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
    });

    console.log("Kết nối thành công cơ sở dữ liệu");
  } catch (error) {
    console.log("Kết nối thất bại", error.message);
  }
};
