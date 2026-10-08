const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.get("/api", (req, res) => {
  res.json({
    message: "Backend Running Successfully",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});