const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const reportCtrl = require("../controllers/report.controller");

router.get("/sales", auth, role("admin"), reportCtrl.salesReport);

module.exports = router;
