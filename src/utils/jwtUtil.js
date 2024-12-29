const jwt = require("jsonwebtoken");

exports.generateToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "1d" });
};
