const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  passwordHash: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    enum: ["manager", "clerk"],
    default: "clerk",
  },
});

module.exports = mongoose.model("User", userSchema);
