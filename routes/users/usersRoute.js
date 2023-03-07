const express = require("express");
const {
  registerUserCtrl,
  userLoginCtrl,
  userProfileCtrl,
} = require("../../controllers/users/userCtrl");
const isLogin = require("../../middlewares/isLogin");

const usersRoute = express.Router();

//POST/api/v1/users/register

usersRoute.post("/register", registerUserCtrl);
//POST/api/v1/users/login
usersRoute.post("/login", userLoginCtrl);

//GET/api/v1/users/profile/:id
usersRoute.get("/profile", isLogin, userProfileCtrl);

module.exports = usersRoute;
