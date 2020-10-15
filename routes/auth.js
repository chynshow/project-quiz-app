const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getMe,
  deleteAccount
} = require("../controllers/auth");
const protect = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);
router.delete("/delete", protect, deleteAccount);

module.exports = router;
