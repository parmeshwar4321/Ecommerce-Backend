const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../utils/jwt");

const products = require("../controller/products.controller.js");

router.post("/add-product/:catalog_id", authenticateToken, async (req, res) => {
  const result = await products.createProduct(req);
  return res.json(result);
});

module.exports = router;
