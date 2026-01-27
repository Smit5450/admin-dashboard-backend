const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const orderCtrl = require("../controllers/order.controller");

router.post("/", auth, orderCtrl.createOrder);
router.get("/my-orders", auth, orderCtrl.getMyOrders);
router.get("/", auth, role("admin"), orderCtrl.getAllOrders);

module.exports = router;
