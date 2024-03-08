const express = require("express");
const router = express.Router();

const TransactionsController = require("../controllers/transactions");

router.post("/", TransactionsController.create);

module.exports = router;
