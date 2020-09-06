const express = require("express");
const route = express.Router();
const doctorsController = require("../../../controllers/doctors_controller");

//doctor register route
route.post("/register", doctorsController.register);

//doctor login route
route.post("/login", doctorsController.login);

module.exports = route;
