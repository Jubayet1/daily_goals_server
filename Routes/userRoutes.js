const express = require("express");
const { registerUser, LogInUser, getMe } = require("../Controllers/userController");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", LogInUser);
router.post("/me", getMe);

module.exports = router;
