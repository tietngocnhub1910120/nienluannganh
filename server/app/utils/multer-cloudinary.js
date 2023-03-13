require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpg", "png"],
  params: {
    public_id: (req, file) => file.filename,
    width: (req, file) => {
      if (file.fieldname === "avatar") {
        return 300;
      }
    },
    height: (req, file) => {
      console.log(file);
      if (file.fieldname === "avatar") {
        return 300;
      }
    },
  },
});

module.exports = multer({ storage: storage });
