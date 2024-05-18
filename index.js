const express = require("express");
const connectMongoDB = require("./connection");
const path = require("path");
const cookieParser = require('cookie-parser')

const urlRoutes = require("./routes/url_routes");
const staticRoutes = require("./routes/staticRouter");
const userRoutes = require("./routes/user_Routes.js");
const { checkForAunthenticaiton, restrictTo } = require("./middleware/auth_middleware.js")

const app = express()
const PORT = 8001;

// ejs View
app.set("view engine", "ejs")
app.set("views", path.resolve("./view"))

// Middlewares
app.use(express.json()) // for reading json files
app.use(express.urlencoded({ extended: false })) // for form submissions
app.use(cookieParser()) // for cookies
app.use(checkForAunthenticaiton); // for authentication

// All Routes
app.use("/", staticRoutes);

// Action parform Routes
app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoutes);
app.use("/user", userRoutes);

// Server Connection
connectMongoDB("mongodb://127.0.0.1:27017/url-shortener-db").then(() => console.log("MongoDB Connected!")); // `url-shortener-db` is database name
app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));