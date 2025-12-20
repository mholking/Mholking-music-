const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/api/test", (req, res) => {
  res.json({ status: "API working ✅" });
});

// Signup route
app.post("/api/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      ok: false,
      message: "All fields required",
    });
  }

  res.json({
    ok: true,
    message: "Signup successful ✅",
    user: { name, email },
  });
});

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Mholking Music Backend is running 🚀" });
});

// START SERVER (ALWAYS LAST)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
