const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
        },
      },
    },
    address: { type: String },
    password: { type: String, required: true, minlength: 8 },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(v);
        },
      },
    },
    admin: { type: Boolean, default: false },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dv6mjv2ib/image/upload/v1676603950/t%E1%BA%A3i_xu%E1%BB%91ng_teirok.jpg",
    },
    bookmarks: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
