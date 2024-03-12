const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  applicableItems: {
   type : Array,
    required : [ture,"Atleast one item is required"],
  },
  totalPrices : {
    type : Double,
    required : [true,"totalPrices is required " ],
      default : 0,
  }
totalDiscount : {
    type : Double,
    required : false,
     }
createdAt : {
    type : Date,
    required : true,
      default : Date.now,
    }
updatedAt : {
  type : Date,
    required : true,
}
});

module.exports = mongoose.model("Transaction", transactionSchema);
