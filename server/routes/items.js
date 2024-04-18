const express = require("express");
const router = express.Router();

const ItemsController = require("../controllers/items");
const { requireRole } = require("../middlewares/auth");

router.get("/", ItemsController.getAll);
router.post("/", requireRole("manager"), ItemsController.create);
router.get("/:id", ItemsController.getById);
router.put("/:id", requireRole("manager"), ItemsController.updateById);
router.delete("/:id", requireRole("manager"), ItemsController.deleteById);

module.exports = router;
