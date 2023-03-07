const { appErr } = require("../../utils/appErr");
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../utils/verifyToken");
//Register
const registerUserCtrl = async (req, res, next) => {
  const { fullname, password, email } = req.body;
  try {
    // if fields are empty
    if (!email || !password || !fullname) {
      return next(appErr("please provide all the fields ", 500));
    }
    res.json({
      status: "success",
      fullname,
      email,
    });
  } catch (error) {
    return next(appErr(error.message, 500));
  }
};

//login
const userLoginCtrl = async (req, res, next) => {
  // console.log("login route");
  const { email, password } = req.body;
  if (!email || !password) {
    return next(appErr("enter proper credentials", 500));
  }
  try {
    if (email !== "user@gmail.com" || password !== "12345") {
      return next(appErr("Invalid login credentials", 500));
    }
    res.json({
      status: "success",
      token: generateToken({
        email: "user@gmail.com",
        password: "12345",
      }),
    });
  } catch (error) {
    return next(appErr(error.message, 500));
  }
};

//profile
const userProfileCtrl = async (req, res, next) => {
  try {
    res.json({
      email: "user@gmail.com",
      password: "12345",
    });
  } catch (error) {
    next(appErr(error.message, 500));
  }
};

module.exports = {
  registerUserCtrl,
  userLoginCtrl,
  userProfileCtrl,
};
