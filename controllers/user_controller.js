const userModel = require("../models/user_model.js");

const handleUserSignup = async (req, res) => {
    const { name, email, password } = req.body;
    await userModel.create({
        name,
        email,
        password
    })
    return res.redirect("/")
}

const handleUserLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password })
    if (!user) {
        return res.render("login", {
            error: "Invalid user or password (worng pass only... :>)"
        })
    }
    return res.redirect("/");
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}