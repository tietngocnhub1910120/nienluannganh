const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  let ext = path.extname(file.originalname);
  if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
    cb(new Error("Unsupported file type!"), false);
    return;
  }
  cb(null, true);
};
module.exports = multer({
  storage: storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 6,
  },
});
