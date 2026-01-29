const permissions = {
    admin: [
        "CREATE_PRODUCT",
        "UPDATE_PRODUCT",
        "DELETE_PRODUCT",
        "VIEW_ORDERS",
        "MANAGE_USERS",
    ],
    user: [
        "VIEW_PRODUCTS",
        "CREATE_ORDER",
    ],
};

module.exports = permissions;
