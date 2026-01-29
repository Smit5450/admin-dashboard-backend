const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");

exports.getStats = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalProducts = await Product.countDocuments();
        const totalOrders = await Order.countDocuments();

        res.json({
            totalUsers,
            totalProducts,
            totalOrders,
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch stats" });
    }
};
