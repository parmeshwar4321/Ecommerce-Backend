const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../utils/jwt");

const sellers = require("../controller/sellers.controller");

router.get("/orders", authenticateToken, async (req, res) => {
  const result = await sellers.getOrders(req);
  return res.send(result);
});

router.post("/create-catalog", authenticateToken, async (req, res) => {
  const result = await sellers.createCatalog(req);
  return res.json(result);
});

module.exports = router;
