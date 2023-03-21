const { Schema, default: mongoose } = require("mongoose");

const cartSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    products: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "Product" },
        color: { type: String, required: true },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Cart", cartSchema);
