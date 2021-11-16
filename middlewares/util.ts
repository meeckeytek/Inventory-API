<<<<<<< HEAD
import msg from "./messages";
import jwt from "jsonwebtoken";

export const getToken = (existed: any) => {
  return jwt.sign(
    {
      userId: existed._id,
      userFirstName: existed.firstName,
      userLastName: existed.lastName,
      userUserName: existed.userName
=======
const jwt = require("jsonwebtoken");
const HttpError = require("./http-error");

exports.getToken = (existed: any) => {
  return jwt.sign(
    {
      userId: existed._id,
      userEmail: existed.email,
      isAdmin: existed.isAdmin,
      firstName: existed.firstName,
      lastName: existed.lastName,
      email: existed.email,
>>>>>>> 3ccdccd5275eaa4ac3d06324cefeae93ebdce391
    },
    `${process.env.JWT_KEY}`,
    { expiresIn: "14d" }
  );
};

<<<<<<< HEAD
export const isAuth = (req: any, res: any, next: any) => {
=======
exports.resetPasswordToken = (user: any) => {
  return jwt.sign(
    { userId: user.id, userEmail: user.email },
    `${process.env.JWT_KEY}`,
    { expiresIn: "20m" }
  );
};

exports.isAuth = (req: any, res: any, next: any) => {
>>>>>>> 3ccdccd5275eaa4ac3d06324cefeae93ebdce391
  if (req.method === "OPTION") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      jwt.verify(
        token,
        `${process.env.JWT_KEY}`,
        function (err: any, decoded: any) {
          if (err) {
<<<<<<< HEAD
            res.status(401).json({ message: msg.invalidToken });
=======
            res.status(401).send({ message: "Invalid Token" });
>>>>>>> 3ccdccd5275eaa4ac3d06324cefeae93ebdce391
          } else {
            req.user = decoded;
            next();
          }
        }
      );
    } else {
<<<<<<< HEAD
      res.status(403).json(msg.notAuthorized);
=======
      res.status(403).json("You are not authorized to perform this function");
>>>>>>> 3ccdccd5275eaa4ac3d06324cefeae93ebdce391
    }
  } catch (err) {
    return res
      .status(403)
<<<<<<< HEAD
      .json(msg.notAuthorized);
  }
};

export const isAdmin = (req: any, res: any, next: any) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: msg.invalidToken });
=======
      .json("You are not authorized to perform this function");
  }
};

exports.isAdmin = (req: any, res: any, next: any) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Invalid Admin token" });
>>>>>>> 3ccdccd5275eaa4ac3d06324cefeae93ebdce391
  }
};
