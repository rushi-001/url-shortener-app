const express = require("express");
const urlRoutes = require("./routes/url_routes");
const connectMongoDB = require("./connection");


const app = express()
const PORT = 8001;

app.use(express.json())

app.use("/url", urlRoutes);

connectMongoDB("mongodb://127.0.0.1:27017/url-shortener-db").then(() => console.log("MongoDB Connected!")); // `url-shortener-db` is database name
app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));