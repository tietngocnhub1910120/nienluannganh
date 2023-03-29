require("dotenv").config();
const { createError } = require("../utils/err");
const Cart = require("../models/cartModel");
const Order = require("../models/orderModel");
class OrderController {
  // Admin
  async createOrder(req, res, next) {
    const { userId } = req.user;
    const { address, phone, amount, email, username, note } = req.body;
    if (!address) {
      return next(createError(400, "Trường địa chỉ bị bỏ trống!"));
    }
    if (!phone) {
      return next(createError(400, "Trường số điện thoại bị bỏ trống!"));
    }
    try {
      const productsCart = await Cart.findOne({ userId }).populate({
        path: "products",
        populate: { path: "productId", select: "-description -colors" },
      });
      const orderCode = "GHN" + Math.floor(Math.random() * 9999999);
      const newOrder = new Order({
        orderCode,
        userId,
        products: productsCart.products,
        address,
        email,
        username,
        note,
        phone,
        amount: amount >= 10000000 ? amount : amount + 500000,
        COD: amount >= 10000000 ? 0 : 500000,
      });
      await newOrder.save();
      res.status(200).json({
        success: true,
        message: "Tạo đơn hàng thành công!",
        newOrder,
      });
    } catch (error) {
      next(error);
    }
  }
  async updateStatusOrder(req, res, next) {
    const orderId = req.params.orderId;
    const newStatus = req.body.status;

    try {
      const order = await Order.findOneAndUpdate(
        { _id: orderId },
        { status: newStatus },
        { new: true }
      );

      res.status(200).json({
        success: true,
        message: "Đã cập nhật trạng thái!",
        order,
      });
    } catch (error) {
      next(error);
    }
  }
  async getAllOrder(req, res, next) {
    try {
      const orders = await Order.find({}).populate("userId", "-password");

      res.status(200).json({
        success: true,
        message: "Lấy danh sách đơn hàng thành công!",
        orders,
      });
    } catch (error) {
      next(error);
    }
  }
  async getOrder(req, res, next) {
    const orderId = req.params.orderId;
    try {
      const order = await Order.findOne({ _id: orderId }).populate(
        "userId",
        "-password"
      );

      res.status(200).json({
        success: true,
        message: "Lấy đơn hàng thành công!",
        order,
      });
    } catch (error) {
      next(error);
    }
  }
  // User
  async getOrderPrivate(req, res, next) {
    const orderId = req.params.orderId;
    const userId = req.user.userId;
    try {
      const order = await Order.findOne({ _id: orderId, userId }).populate(
        "userId",
        "-password"
      );

      res.status(200).json({
        success: true,
        message: "Lấy đơn hàng thành công!",
        order,
      });
    } catch (error) {
      next(error);
    }
  }
  async getAllOrderPrivate(req, res, next) {
    const orderId = req.params.orderId;
    const userId = req.user.userId;
    try {
      const order = await Order.find({ _id: orderId, userId }).populate(
        "userId",
        "-password"
      );

      res.status(200).json({
        success: true,
        message: "Lấy danh sách đơn hàng thành công!",
        order,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new OrderController();
