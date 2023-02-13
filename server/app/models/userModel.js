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
    password: { type: String, required: true, minlength: 6 },
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
    avatar: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
