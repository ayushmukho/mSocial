const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

//import post Routes
const postRoutes = require("./routes/post");

module.exports = app;
