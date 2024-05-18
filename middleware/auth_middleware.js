const { getUser } = require("../service/auth_service")

// Authentication
// `checkForAunthenticaiton` its an middleware function
function checkForAunthenticaiton(req, res, next) {
    const userId = req.cookies?.uid;
    const userWithSessionId = getUser(userId);

    if (!userId) return next();

    req.user = userWithSessionId;
    next()
}

// Authorization
function restrictTo(roles = []) {
    return function (req, res, next) {
        if (!req.user) return res.redirect("/login");

        if (!roles.includes(req.user.role)) return res.end("Un Authorized!");

        next();
    }
}

module.exports = {
    // restictToLoggedinUserOnly,
    // checkAuth,
    checkForAunthenticaiton,
    restrictTo,
}


// if any error occurs add remove the checkForAunthenticaiton and add this middlewares but  apply this only on /urls `restictToLoggedinUserOnly`
// const restictToLoggedinUserOnly = async (req, res, next) => {
//     const userId = req.cookies?.uid;

//     if (!userId) return res.redirect("/login");

//     const userWithSessionId = getUser(userId);

//     if (!userWithSessionId) return res.redirect("/login");

//     req.user = userWithSessionId;

//     next();
// }

// const checkAuth = async (req, res, next) => {
//     const userId = req.cookies?.uid;

//     const userWithSessionId = getUser(userId);

//     req.user = userWithSessionId;

//     next();
// }