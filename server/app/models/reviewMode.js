const { Schema, default: mongoose } = require("mongoose");

const reviewSchema = new Schema(
  {
    productId: { type: Schema.Types.ObjectId, ref: "Product" },
    userId: { type: Schema.Types.ObjectId, ref: "Auth" },
    content: { type: String, required: true, maxlength: 255 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
