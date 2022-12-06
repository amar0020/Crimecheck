require("dotenv").config();

const jwt = require("jsonwebtoken");
// var Promice = require("Promice")
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    var decoded = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY,
      (err, decoded) => {
        if (err) return reject(err);

        return resolve(decoded);
      }
    );
    // console.log(decoded);
  });
};


const authenticate = async (req, res, next) => {
    // console.log(req.headers);
    if (!req.headers.authorization)
      return res
        .status(400)
        .send({ message: "Authorization token not found or incorrect" });
    // console.log(req.headers);
    if (!req.headers.authorization.startsWith("Bearer "))
      return res
        .status(400)
        .send({ message: "Authorization token not found or incorrect" });
  
    // console.log(req.headers);
    const token = req.headers.authorization.trim().split(" ")[1];
  
    let decoded;
    try {
      decoded = await verifyToken(token);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .send({ message: "Authorization token not found or incorrect" });
    }
  
    req.userID = decoded.user;
  
    return next();
  };
  
  module.exports = authenticate;