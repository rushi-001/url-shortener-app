const { getUser } = require("../service/auth_service")

const restictToLoggedinUserOnly = async (req, res, next) => {
    const userId = req.cookies?.uid;

    if (!userId) return res.redirect("/login");

    const userWithSessionId = getUser(userId);

    if (!userWithSessionId) return res.redirect("/login");

    req.user = userWithSessionId;

    next();
}

const checkAuth = async (req, res, next) => {
    const userId = req.cookies?.uid;

    const userWithSessionId = getUser(userId);

    req.user = userWithSessionId;

    next();
}

module.exports = {
    restictToLoggedinUserOnly,
    checkAuth,
}