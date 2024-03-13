const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("Connected to the database");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to the database", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from the database");
});

module.exports = mongoose.connection;
