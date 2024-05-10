const express = require("express");
const urlModel = require("../models/url_model.js")

const router = express.Router();

router.get("/", async (req, res) => {
    const data = await urlModel.find({});
    return res.render("home", {
        userData: data,
    })
})

module.exports = router;