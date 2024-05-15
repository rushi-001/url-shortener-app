// todo: generate uid and show data acordingly that on user
const express = require("express");
const connectMongoDB = require("./connection");
const path = require("path");
const cookieParser = require('cookie-parser')

const urlRoutes = require("./routes/url_routes");
const staticRoutes = require("./routes/staticRouter");
const userRoutes = require("./routes/user_Routes.js");
const { restictToLoggedinUserOnly, checkAuth } = require("./middleware/auth_middleware.js")

const app = express()
const PORT = 8001;

// ejs View
app.set("view engine", "ejs")
app.set("views", path.resolve("./view"))

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// All Routes
app.use("/", checkAuth, staticRoutes);

// Action parform Routes
app.use("/url", restictToLoggedinUserOnly, urlRoutes); // inline middleware `userWithSessionId`
app.use("/user", userRoutes);

// Server Connection
connectMongoDB("mongodb://127.0.0.1:27017/url-shortener-db").then(() => console.log("MongoDB Connected!")); // `url-shortener-db` is database name
app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));