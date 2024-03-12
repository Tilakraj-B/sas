const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
    applicableItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
      }],
    type: {
        type: String,
        enum: ['percentage', 'direct'],
        required: true
      },
    value: {
        type: Number,
        required: true
      },
    maxDiscount: {
        type: Number,
        required: true
      },
    startTimestamp: {
        type: Date,
        required:true
      },
    endTimestamp: {
        type: Date,
        required: true
      }
    });

module.exports = mongoose.model("Deal", dealSchema);

