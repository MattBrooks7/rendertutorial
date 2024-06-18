const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users")

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
