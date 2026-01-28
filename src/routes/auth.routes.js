const express = require("express");
const router = express.Router();

const {
    register,
    login, refreshToken, logout
} = require("../controllers/auth.controller");

// Register user
router.post("/register", register);

// Login user
router.post("/login", login);

router.post("/refresh", refreshToken);
router.post("/logout", logout);

module.exports = router;
