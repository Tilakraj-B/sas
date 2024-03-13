const express = require("express");
const router = express.Router();

const DealsController = require("../controllers/deals");
const { requireRole } = require("../middlewares/auth");

router.get("/", DealsController.getAll);
router.post("/", requireRole("manager"), DealsController.create);
router.delete("/:id", requireRole("manager"), DealsController.deleteById);

module.exports = router;
