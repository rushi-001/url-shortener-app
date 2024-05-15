const express = require("express");
const urlModel = require("../models/url_model.js")

const router = express.Router();

router.get("/", async (req, res) => {
    if (!req.user) return res.redirect("/login")
    const data = await urlModel.find({ createdBy: req.user._id });
    return res.render("home", {
        userData: data,
    })
})

router.get("/signup", async (req, res) => {
    return res.render("signup")
})

router.get("/login", async (req, res) => {
    return res.render("login")
})

module.exports = router;