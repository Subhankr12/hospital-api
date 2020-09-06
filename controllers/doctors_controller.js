const Doctor = require("./../models/doctor");
const jwt = require("jsonwebtoken");

//register doctor
module.exports.register = async (req, res) => {
  try {
    //check if password and confirm password matches
    if (req.body.password !== req.body.confirm_password) {
      return res.status(400).json({
        message: "password doesn't match",
      });
    }

    //  check if phone number already exists
    let doctorExist = await Doctor.findOne({ phone: req.body.phone });

    if (doctorExist) {
      //  return doctor exist message
      return res.status(400).json({ message: "Doctor already exists!!" });
    } else {
      //create new doctor
      await Doctor.create(req.body);

      return res.status(200).json({
        message: "Doctor successfully registered",
      });
    }
  } catch (err) {
    console.log("Error in doctor registration", err);

    return res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
};

//login doctor
module.exports.login = async (req, res) => {
  try {
    //check if the doctor is registered or not
    let doctorExist = await Doctor.findOne({ phone: req.body.phone });

    if (!doctorExist || doctorExist.password !== req.body.password) {
      return res.status(422).json({ message: "Invalid Username/Password" });
    }

    //log in doctor successfully
    return res.status(200).json({
      message: "Log in successful",
      data: {
        token: jwt.sign(doctorExist.toJSON(), "coronapatients", {
          expiresIn: "360000000",
        }),
      },
    });
  } catch (err) {
    console.log(`Error logging in doctor : ${err}`);

    return res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
};
