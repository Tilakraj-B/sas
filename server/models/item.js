const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true 
    },
    pricePerItem: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      enum: ["Cat1", "Cat2"],
      required: true
    },
    imageUrl: {
      type: String,
      require: true
    },
    quantity: {
      type: Number,
      required: true
    },
  },
  {
  timestamps: true
  }
);

module.exports = mongoose.model("Item", itemSchema);
