require("dotenv").config();
const { createError } = require("../utils/err");
const Product = require("../models/productModel");
const cloudinary = require("../utils/cloudinary");
class ProductController {
  async getProduct(req, res, next) {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);
      if (!product) return next(createError(404, "Sản phẩm không tồn tại!"));
      res.status(200).json({
        success: true,
        message: "Lấy thông tin sản phẩm thành công!",
        product,
      });
    } catch (error) {
      next(error);
    }
  }
  async getAllProduct(req, res, next) {
    let title = req.query.title || "";
    let filter = {};
    if (req.query.type) {
      filter = {
        type: req.query.type,
      };
    }
    const pageItem = 8;
    const page = req.query.page || 1;
    const sort = req.query.date || "-createdAt";

    try {
      const products = await Product.find({
        title: new RegExp(title, "i"),
      })
        .where(filter)
        .skip(pageItem * page - pageItem)
        .limit(pageItem)
        .sort(sort);

      res.status(200).json({
        success: true,
        message: "Lấy danh sách sản phẩm thành công!",
        countProducts: products.length,
        products,
      });
    } catch (error) {
      next(error);
    }
  }
  async createProduct(req, res, next) {
    const skuRandom = "FN" + Math.floor(Math.random() * 1000000);
    let { title, description, price, type, colors } = req.body;
    colors = String(colors).split(",");
    const files = req.files;
    const urlImages = [];
    if (!title) {
      return next(createError(401, "Thiếu dữ liệu trường tiêu đề sản phẩm!"));
    }
    if (!price) {
      return next(createError(401, "Thiếu dữ liệu trường giá sản phẩm!"));
    }

    try {
      if (files) {
        for (const file of files) {
          const { secure_url } = await cloudinary.uploader.upload(file.path);
          console.log(secure_url);
          urlImages.push(secure_url);
        }
      }

      const newProduct = new Product({
        sku: skuRandom,
        title,
        description,
        price,
        type,
        colors,
        urlImages,
      });
      await newProduct.save();
      res.status(200).json({
        success: true,
        message: "Thêm sản phẩm thành công!",
        newProduct,
      });
    } catch (error) {
      next(error);
    }
  }
  async editProduct(req, res, next) {
    const id = req.params.id;
    const { title, description, price, colors, type } = req.body;
    const urlImages = [];
    if (req.files) {
      req.files.forEach((file) => {
        urlImages.push(file.path);
      });
    }
    let productUpdate = {
      title,
      description,
      price,
      colors,
      type,
      urlImages,
    };
    try {
      productUpdate = await Product.findByIdAndUpdate(id, productUpdate, {
        new: true,
      });
      res.status(200).json({
        success: true,
        message: "Chỉnh sửa thông tin sản phẩm thành công!",
      });
    } catch (error) {
      next(error);
    }
  }
  async deleteProduct(req, res, next) {
    const id = req.params.id;
    try {
      const product = await Product.deleteOne({ _id: id });
      res.status(200).json({
        success: true,
        message: `Xóa ${product.deletedCount} sản phẩm thành công!`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductController();
