const express = require("express");
const router = express.Router();

const SalesController = require("../controllers/sales");

router.get("/:itemId", SalesController.getByItemId);

module.exports = router;
