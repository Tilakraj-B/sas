const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  // ...
  // ...
  // ...
});

module.exports = mongoose.model("Sale", saleSchema);