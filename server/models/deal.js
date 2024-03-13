const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
  applicableItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  type: {
    type: String,
    enum: ["percentage", "fixed"],
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  startTimestamp: {
    type: Date,
    required: true,
  },
  endTimestamp: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Deal", dealSchema);
