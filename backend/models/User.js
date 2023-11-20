const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please tell us your name."],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  email: {
    type: String,
    required: [true, "Please provide a Email."],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid Email."],
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
    minLength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password."],
    validate: {
      validator: function (confirmPassword) {
        return confirmPassword === this.password;
      },
      message: "Password must be same.",
    },
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
