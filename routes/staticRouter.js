const express = require("express");
const urlModel = require("../models/url_model.js");
const { restrictTo } = require("../middleware/auth_middleware.js");

const router = express.Router();

router.get("/admin/url", restrictTo(["ADMIN"]), async (req, res) => {
    const data = await urlModel.find({});
    return res.render("home", {
        userData: data,
    })
})

router.get("/", restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
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