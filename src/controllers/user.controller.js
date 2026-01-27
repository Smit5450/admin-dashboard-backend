const User = require("../models/User");

// GET ALL USERS (Admin only)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// UPDATE USER (Admin only)
exports.updateUser = async (req, res) => {
    try {
        const { role, name } = req.body;

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { role, name },
            { new: true }
        ).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// DELETE USER (Admin only)
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
