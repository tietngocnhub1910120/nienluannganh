const { Schema, default: mongoose } = require("mongoose");
const sku = "FN" + Math.floor(Math.random() * 1000000);
console.log(sku);
const productSchema = new Schema(
  {
    sku: { type: String, default: sku },
    title: { type: String, required: true, maxlength: 100 },
    description: { type: String, required: true, maxlength: 500 },
    urlImages: [{ type: String, required: true }],
    price: { type: Number, required: true },
    type: { type: String, enum: ["Ghế", "Bàn"], required: true }, //["Ghế", "Bàn"]
    color: { type: Array }, //["Nâu", "Trắng", "Đen"]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
