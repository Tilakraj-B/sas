const express = require("express");
const router = express.Router();

const SalesController = require("../controllers/sales");
const { requireRole } = require("../middlewares/auth");

router.get("/:itemId", requireRole("manager"), SalesController.getByItemId);

module.exports = router;
