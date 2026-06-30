const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// =====================
// SHOPIFY API (FAST 200ms)
// =====================
app.get("/shopify_data", (req, res) => {
  setTimeout(() => {
    res.json({
      revenue: 125000,
      orders: 82,
      inventory: 320,
    });
  }, 200);
});

// =====================
// TIKTOK API (SLOW OR ERROR)
// =====================
app.get("/tiktok_data", (req, res) => {
  const success = Math.random() > 0.5;

  if (success) {
    setTimeout(() => {
      res.json({
        views: 450000,
        sales: 120,
        conversion: 3.2,
      });
    }, 5000);
  } else {
    setTimeout(() => {
      res.status(500).json({
        error: "TikTok API failed",
      });
    }, 5000);
  }
});

// =====================
// START SERVER
// =====================
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});