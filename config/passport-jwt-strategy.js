const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const Doctor = require("../models/doctor");

let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "coronapatients",
};

passport.use(
  new JWTStrategy(opts, (jwtPayload, done) => {
    Doctor.findById(jwtPayload._id, (err, doctor) => {
      if (err) console.log("Error finding through JWT");
      if (doctor) return done(null, doctor);
      else return done(null, false);
    });
  })
);

module.exports = passport;
