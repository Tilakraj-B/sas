const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.get("/", UsersController.getAll);
router.post("/clerk", UsersController.createClerk);
router.delete("/:id", UsersController.deleteById);

module.exports = router;
