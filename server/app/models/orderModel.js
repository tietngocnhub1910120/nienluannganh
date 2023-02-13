const { Schema, default: mongoose } = require("mongoose");

const orderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "Auth" },
    products: [
      {
        productId: [{ type: Schema.Types.ObjectId, ref: "Product" }],
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "Chờ xác nhận" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", orderSchema);
