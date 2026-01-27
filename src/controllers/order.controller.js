const Order = require("../models/Order");
const Product = require("../models/Product");

exports.createOrder = async (req, res) => {
    try {
        const { items } = req.body;

        let total = 0;
        const orderItems = [];

        for (let item of items) {
            const product = await Product.findById(item.product);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }

            orderItems.push({
                product: product._id,
                quantity: item.quantity,
                price: product.price
            });

            total += product.price * item.quantity;
        }

        const order = await Order.create({
            user: req.user.id,
            items: orderItems,
            totalAmount: total
        });

        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getMyOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user.id })
        .populate("items.product", "name price");

    res.json(orders);
};

exports.getAllOrders = async (req, res) => {
    const orders = await Order.find()
        .populate("user", "name email")
        .populate("items.product", "name price");

    res.json(orders);
};
