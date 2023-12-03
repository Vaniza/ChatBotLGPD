// src/routes/chatRoutes.js

const express = require("express");
const chatController = require("../controllers/chatController");
const verifyToken = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/message", verifyToken, chatController.processMessage);

module.exports = router;
