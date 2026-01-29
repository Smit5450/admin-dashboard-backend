const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const authorize = require("../middleware/authorize");
const { getStats } = require("../controllers/admin.controller");

router.get(
    "/stats",
    auth,
    authorize("MANAGE_USERS"), // admin-only
    getStats
);

module.exports = router;
