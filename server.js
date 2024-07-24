const express = require("express");
const app = express();

// Use the router
app.use("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

// Export the app for Vercel
module.exports = app;
