const { Schema, default: mongoose } = require("mongoose");

const cartSchema = new Schema(
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
  },
  { timestamps: true }
);
module.exports = mongoose.model("Cart", cartSchema);
