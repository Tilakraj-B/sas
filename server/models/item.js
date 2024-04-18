const mongoose = require("mongoose");

const categories = [
  {
    label: "Electronics",
  },
  {
    label: "Clothing",
  },
  {
    label: "Home & Garden",
  },
  {
    label: "Automotive",
  },
  {
    label: "Toys & Games",
  },
  {
    label: "Books",
  },
  {
    label: "Sports & Outdoors",
  },
  {
    label: "Beauty & Personal Care",
  },
  {
    label: "Groceries",
  },
  {
    label: "others",
  },
];

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pricePerItem: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: categories.map((category) => category.label),
      required: true,
      default: "others",
    },
    imageUrl: {
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemSchema);
