const express = require("express");
const app = express();
const router = express.Router();
router.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});
app.use(router);

// Export the app for Vercel
module.exports = router;
