const userModel = require("../models/user_model.js");
const { setUser, getUser } = require("../service/auth_service.js")
const { v4: uuidv4 } = require("uuid");

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
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie("uid", sessionId);
    return res.redirect("/");
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}
