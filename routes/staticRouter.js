const express = require("express");
const urlModel = require("../models/url_model.js")

const router = express.Router();

router.get("/", async (req, res) => {
    const data = await urlModel.find({});
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