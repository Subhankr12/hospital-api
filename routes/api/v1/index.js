const express = require("express");
const route = express.Router();

// doctors route
route.use("/doctors", require("./doctors"));

//patients route
route.use("/patients", require("./patients"));

//reports route
route.use("/reports", require("./reports"));

module.exports = route;
