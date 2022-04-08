const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

//Using Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import Routes
const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");

app.use("/api/v1", postRoutes);
app.use("/api/v1", userRoutes);

module.exports = app;
