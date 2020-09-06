const express = require("express");
const port = 5500;
const app = express();

const db = require("./config/mongoose");

const passport = require("passport");
const passportJWTStrategy = require("./config/passport-jwt-strategy");

app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) return console.log("Error in running server:", err);

  console.log(`Server is up and running on http://localhost:${port}`);
});
