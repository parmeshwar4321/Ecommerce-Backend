const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../utils/jwt");
const buyerController = require("../controller/buyers.controller");

// API for User register.
router.get("/list-of-sellers", authenticateToken, async (req, res) => {
  const result = await buyerController.getSellers(req);
  return res.send(result);
});

// API for User login.
router.get(
  "/seller-catalog/:seller_id",
  authenticateToken,
  async (req, res) => {
    const result = await buyerController.getCatalogBySeller(req);
    return res.json(result);
  }
);

router.post("/create-order/:seller_id", authenticateToken, async (req, res) => {
  const result = await buyerController.createOrder(req);
  return res.json(result);
});

module.exports = router;
