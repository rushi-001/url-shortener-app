// StateFull
// const sessionIdToUserMap = new Map(); // Its like diary of ids

// const setUser = (id, user) => {
//     sessionIdToUserMap.set(id, user);
// }

// const getUser = (id) => {
//     return sessionIdToUserMap.get(id);
// }

// module.exports = {
//     setUser,
//     getUser,
// }



// StateLess
const jwt = require("jsonwebtoken")

const key = "3w@ovNR4"

// it set's session session token 
const setUser = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            email: user.email,
        }, key
    );
}

// it get's the token
const getUser = (token) => {
    if (!token) return null;
    return jwt.verify(token, key);
}

module.exports = {
    setUser,
    getUser,
}