const express = require("express");
const { requireAuth, requireRole } = require("../middlewares/auth");
const router = express.Router();

router.use("/auth", require("./auth"));
router.use("/deals", requireAuth, require("./deals"));
router.use("/items", requireAuth, require("./items"));
router.use("/sales", requireAuth, require("./sales"));
router.use("/users", requireAuth, require("./users"));
router.use("/transactions", requireAuth, require("./transactions"));

module.exports = router;
