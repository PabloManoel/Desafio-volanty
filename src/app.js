const express = require('express');
const app = express();
const { handleError } = require('./helpers/error')

const index = require("./routes/index");
const cavRoute = require("./routes/cavRoute");

app.use(express.json());

app.use("/", index);
app.use("/cav", cavRoute);

// precisa ser o ultimo middleware desse arquivo
app.use(function (err, req, res, next) {
  handleError(err, res)
})

module.exports = app;