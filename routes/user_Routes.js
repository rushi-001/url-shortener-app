const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controllers/user_controller.js")

const router = express.Router();

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);

module.exports = router;