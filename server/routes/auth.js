const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth");

router.post("/register", AuthController.signup);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);

module.exports = router;
