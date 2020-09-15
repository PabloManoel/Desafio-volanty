const express = require('express');
const app = express();

// routes
const index = require("./routes/index");
const cavRoute = require("./routes/cavRoute");

app.use("/", index);
app.use("/cav", cavRoute);

module.exports = app;