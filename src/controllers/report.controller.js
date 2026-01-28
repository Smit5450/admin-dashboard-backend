const Order = require("../models/Order");
const asyncHandler = require("../utils/asyncHandler");

exports.salesReport = asyncHandler(async (req, res) => {
    const report = await Order.aggregate([
        { $match: { status: "delivered" } },
        {
            $group: {
                _id: null,
                totalOrders: { $sum: 1 },
                totalRevenue: { $sum: "$totalAmount" }
            }
        }
    ]);

    res.json(report);
});
