const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");

const {
    getAllUsers,
    updateUser,
    deleteUser
} = require("../controllers/user.controller");

// Admin only routes
router.get("/", authMiddleware, roleMiddleware("admin"), getAllUsers);
router.put("/:id", authMiddleware, roleMiddleware("admin"), updateUser);
router.delete("/:id", authMiddleware, roleMiddleware("admin"), deleteUser);

module.exports = router;
