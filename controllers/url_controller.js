const shortid = require("shortid")
const urlModel = require("../models/url_model.js");

const handleGenerateNewShortUrl = async (req, res) => {
    const shortUrlId = shortid();
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "URL is required!" })
    await urlModel.create({
        shortId: shortUrlId,
        redirectedUrl: body.url,
        visitHistory: [],
    })
    return res.json({ id: shortUrlId });
}

const handleUserShortUrl = async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await urlModel.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        }
    )
    res.redirect(entry.redirectedUrl);
}

const handleShowClickHistory = async (req, res) => {
    // todo: do this 
}

module.exports = {
    handleGenerateNewShortUrl,
    handleUserShortUrl
}