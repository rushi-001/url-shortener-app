const express = require("express");
const { handleGenerateNewShortUrl, handleUserShortUrl } = require("../controllers/url_controller")

const router = express.Router();

router.post("/", handleGenerateNewShortUrl)
router.get("/:shortId", handleUserShortUrl)
router.get("/showCliks/:shortId",)

module.exports = router;