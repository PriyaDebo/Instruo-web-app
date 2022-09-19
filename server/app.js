const express = require("express");
const morgan = require("morgan");

const app = express();

// Development Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

module.exports = app;
