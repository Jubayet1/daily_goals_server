const express = require("express");
const { registerUser, LogInUser, getMe } = require("../Controllers/userController");
const router = express.Router();

router.get("/", registerUser);
router.post("/", registerUser);
router.post("/login", LogInUser);
router.get("/me", getMe);

module.exports = router;
