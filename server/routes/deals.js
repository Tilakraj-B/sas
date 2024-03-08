const express = require("express");
const router = express.Router();

const DealsController = require("../controllers/deals");

router.get("/", DealsController.getAll);
router.post("/", DealsController.create);
router.delete("/:id", DealsController.deleteById);

module.exports = router;
