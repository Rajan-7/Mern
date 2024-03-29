const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized HTTP,Token not provided" });
  }

  //Verifying the token
  const jwtToken = token.replace("Bearer", "").trim();
  // console.log("From middleware", jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_SIGNATURE);
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    console.log(userData);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token not provided" });
  }
};

module.exports = authMiddleware;
