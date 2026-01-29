const permissions = require("../config/permissions");

module.exports = (requiredPermission) => {
    return (req, res, next) => {
        const userRole = req.user.role;

        const rolePermissions = permissions[userRole] || [];

        if (!rolePermissions.includes(requiredPermission)) {
            return res.status(403).json({
                message: "Access denied",
            });
        }

        next();
    };
};
