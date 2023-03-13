const { Schema, default: mongoose } = require("mongoose");

const productSchema = new Schema(
  {
    sku: { type: String },
    title: { type: String, required: true, maxlength: 100 },
    description: { type: String, required: true, maxlength: 500 },
    urlImages: [{ type: String, required: true }],
    price: { type: Number, required: true },
    type: { type: String, enum: ["Chair", "Table"], required: true }, //["Ghế", "Bàn"]
    colors: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
