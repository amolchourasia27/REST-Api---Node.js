const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.header.authorization.split(" ")[1];
    // console.log(token);
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
    req.useData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed",
    });
  }
};
