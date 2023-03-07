const { appErr } = require("../utils/appErr");
const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next) => {
  const token = getTokenFromHeader(req);
  const decodedUser = verifyToken(token);
  // console.log(decodedUser);
  req.user = decodedUser.email;
  if (!decodedUser.email) {
    return next(appErr("invalid token please login again"));
  }
  next();
};

module.exports = isLogin;
