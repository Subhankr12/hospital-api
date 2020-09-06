const express = require("express");
const route = express.Router();
const patientsController = require("../../../controllers/patients_controller");
const Patient = require("../../../models/patient");
const passport = require("passport");

// show all the patients route
route.get("/", async (req, res) => {
  const patient = await Patient.find({});
  return res.send(patient);
});

// patient register route
route.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  patientsController.register
);

// create report route
route.post(
  "/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  patientsController.createReport
);

// get all the reports route
route.get(
  "/:id/all_reports",
  passport.authenticate("jwt", { session: false }),
  patientsController.allReports
);

module.exports = route;
