const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors package
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Use bodyParser middleware for parsing application/json
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
