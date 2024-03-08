const express = require("express");
const router = express.Router();

const ItemsController = require("../controllers/items");

router.get("/", ItemsController.getAll);
router.post("/", ItemsController.create);
router.get("/:id", ItemsController.getById);
router.put("/:id", ItemsController.updateById);

module.exports = router;
