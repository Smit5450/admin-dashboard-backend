const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error.middleware");
const morgan = require("morgan");

dotenv.config();        // Load .env variables
connectDB();            // Connect MongoDB

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(morgan("combined"));
}else{
    app.use(morgan("dev"));
}
app.use(morgan("dev"));


// Routes
app.use("/api/admin", require("./routes/admin.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/products", require("./routes/product.routes"));
app.use("/api/orders", require("./routes/order.routes"));
app.use("/api/reports", require("./routes/report.routes"));
app.use("/api/health", require("./routes/health.routes"));

// Health check
app.get("/", (req, res) => {
    res.send("🚀 Admin Dashboard Backend API is running");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
