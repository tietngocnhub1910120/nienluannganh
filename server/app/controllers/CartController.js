require("dotenv").config();
const { createError } = require("../utils/err");
const Cart = require("../models/cartModel");
class CartController {
  async addToCart(req, res, next) {
    const { userId } = req.user;
    const { productId } = req.params;
    const { quantity, color } = req.body;
    try {
      const cart = await Cart.findOne({ userId });
      if (cart) {
        const itemIndex = cart.products.findIndex((item) => {
          return item.productId.toString() === productId && item.color == color;
        });
        console.log(itemIndex);
        if (itemIndex <= -1) {
          cart.products.push({ productId, quantity, color });
        } else {
          // check lại sau tăng 1 hoặc tăng nhiều
          cart.products[itemIndex].quantity =
            cart.products[itemIndex].quantity + Number(quantity);
        }
        await cart.save();
        res.status(200).json({
          success: true,
          message: "Thêm sản phẩm thành công!",
          cart,
        });
      } else {
        const newCart = new Cart({
          userId,
          products: [
            {
              productId,
              quantity,
              color,
            },
          ],
        });
        await newCart.save();
        res.status(200).json({
          success: true,
          message: "Thêm sản phẩm thành công!",
          newCart,
        });
      }
    } catch (error) {
      next(error);
    }
  }
  async removeFromCart(req, res, next) {
    const { productId } = req.params;
    const { color } = req.body;
    const { userId } = req.user;
    try {
      const cart = await Cart.findOne({ userId });
      const itemIndex = cart.products.findIndex(
        (product) =>
          product.productId.toString() === productId && product.color === color
      );

      cart.products.pop(itemIndex);
      if (cart.products.length === 0) {
        await Cart.deleteOne({ userId });
        return res.status(200).json({
          success: true,
          message: "Xóa sản phẩm thành công!",
          cart,
        });
      }
      await cart.save();
      res.status(200).json({
        success: true,
        message: "Xóa sản phẩm thành công!",
        cart,
      });
    } catch (error) {
      next(error);
    }
    /*
      logic
      - xóa sản phẩm
      - check danh sách sản phẩm
        + nếu trong giỏ hàng không còn sản phẩm => xóa giỏ hàng
    */
  }
  async updateCart(req, res, next) {
    const { productId } = req.params;
    const { quantity, color } = req.body;
    const { userId } = req.user;
    try {
      const cart = await Cart.findOne({ userId });
      const itemIndex = cart.products.findIndex(
        (item) =>
          item.productId.toString() === productId && item.color === color
      );
      // update quantity product
      cart.products[itemIndex].quantity = quantity;
      if (cart.products[itemIndex].quantity > 0) {
        await cart.save();
        res.status(200).json({
          success: true,
          message: "Cập nhật giỏ hàng thành công!",
          cart,
        });
      } else {
        cart.products.pop(itemIndex);
        if (cart.products.length === 0) {
          await Cart.deleteOne({ userId });
          return res.status(200).json({
            success: true,
            message: "Cập nhật giỏ hàng thành công!",
            cart,
          });
        }
        await cart.save();
        res.status(200).json({
          success: true,
          message: "Cập nhật giỏ hàng thành công!",
          cart,
        });
      }
    } catch (error) {
      next(error);
    }
    /*
      logic
      - cap nhat sản phẩm
      - check sản phẩm có quantity < 1 => remove product id
        - check danh sách sản phẩm
          + nếu trong giỏ hàng không còn sản phẩm => xóa giỏ hàng
    */
  }
  async getCart(req, res, next) {
    const { userId } = req.user;
    try {
      const myCart = await Cart.findOne({ userId })
        .populate("userId", "-password -admin")
        .populate({
          path: "products",
          populate: { path: "productId", select: "-description -colors" },
        });
      if (!myCart) return next(createError(404, "Cart do not exist"));
      res.status(200).json({
        success: true,
        message: "Get cart successfully!",
        myCart,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CartController();
