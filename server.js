const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

app.listen(8000, () => {
  console.log("server listening on");
});
