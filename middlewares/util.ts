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
    },
    `${process.env.JWT_KEY}`,
    { expiresIn: "14d" }
  );
};

exports.resetPasswordToken = (user: any) => {
  return jwt.sign(
    { userId: user.id, userEmail: user.email },
    `${process.env.JWT_KEY}`,
    { expiresIn: "20m" }
  );
};

exports.isAuth = (req: any, res: any, next: any) => {
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
            res.status(401).send({ message: "Invalid Token" });
          } else {
            req.user = decoded;
            next();
          }
        }
      );
    } else {
      res.status(403).json("You are not authorized to perform this function");
    }
  } catch (err) {
    return res
      .status(403)
      .json("You are not authorized to perform this function");
  }
};

exports.isAdmin = (req: any, res: any, next: any) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Invalid Admin token" });
  }
};
