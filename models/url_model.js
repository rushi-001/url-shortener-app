const mongoose = require("mongoose");

// schema = structure
const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        require: true,
        unique: true,
    },
    redirectedUrl: {
        type: String,
        reqiure: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }
}, { timestamps: true });

const urlModel = mongoose.model("url", urlSchema); // `url` is the collection name in database mongodb automaticaly makes the url to urls

module.exports = urlModel; 