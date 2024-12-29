const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const { errorHandler } = require("./middlewares/errorMiddleware");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

//cors middleware
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.get("/health", (req, res) => {
  return res.status(200).json({ message: "Server is running" });
});

// Error Handling Middleware
app.use(errorHandler);

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
