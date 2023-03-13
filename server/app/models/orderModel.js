const { Schema, default: mongoose } = require("mongoose");

const orderSchema = new Schema(
  {
    orderCode: { type: String, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    products: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "Product" },
        color: { type: String, required: true },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    COD: { type: Number, default: 50000 },
    status: {
      type: String,
      default: "Chờ xác nhận",
      enum: ["Chờ xác nhận", "Đã xác nhận", "Đang giao", "Đã giao", "Đã hủy"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", orderSchema);
