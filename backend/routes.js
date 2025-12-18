const express = require("express");
const router = express.Router();

// Test API route
router.get("/test", (req, res) => {
  res.json({ status: "API working ✅" });
});

module.exports = router;
