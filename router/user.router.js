const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

// API for User register.
router.post("/register", async (req, res) => {
  const result = await userController.createUser(req);
  return res.send(result);
});

// API for User login.
router.post("/login", async (req, res) => {
  const result = await userController.loginUser(req);
  return res.json(result);
});

module.exports = router;
