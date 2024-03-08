const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth"));
router.use("/deals", require("./deals"));
router.use("/items", require("./items"));
router.use("/sales", require("./sales"));
router.use("/users", require("./users"));
router.use("/transactions", require("./transactions"));

module.exports = router;
