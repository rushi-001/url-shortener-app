const express = require("express");
const urlRoutes = require("./routes/url_routes");
const connectMongoDB = require("./connection");
const path = require("path");
const staticRoute = require("./routes/staticRouter");
// const urlModel = require("./models/url_model");

const app = express()
const PORT = 8001;

app.set("view engine", "ejs")
app.set("views", path.resolve("./view"))

// app.get("/test/home", async (req, res) => {
//     const allUrls = urlModel.find({});
//     return res.render("home.ejs");
// })

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", staticRoute);
app.use("/url", urlRoutes);

connectMongoDB("mongodb://127.0.0.1:27017/url-shortener-db").then(() => console.log("MongoDB Connected!")); // `url-shortener-db` is database name
app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));