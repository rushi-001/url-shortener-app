const mongoose = require("mongoose");

// todo: make authentication...
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true })

// userModel
const userModel = mongoose.model("user", userSchema);

module.exports = userModel;