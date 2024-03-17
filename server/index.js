const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { errorHandler } = require("./middlewares/errors");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
require("./config/db");

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the SAS API",
  });
});

app.use("/api", require("./routes"));

app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
