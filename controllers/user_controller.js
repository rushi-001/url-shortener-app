const userModel = require("../models/user_model.js");
const { setUser } = require("../service/auth_service.js")
// const { v4: uuidv4 } = require("uuid");

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
            error: "Invalid user or password"
        })
    }
    const token = setUser(user);
    res.cookie("uid", token);
    return res.redirect("/");
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}
