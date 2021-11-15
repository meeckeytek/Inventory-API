import message from "../middlewares/messages";
import bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import User from "../models/user.model";

export const defaultMsg = async (req: string, res: any) => {
  res.status(200).json({ message: message.defaultMsg });
};

export const newAdmin = async (req: any, res: any) => {
  const { userName, password, isAdmin } = req.body;

  let existed: any;

  try {
    existed = await User.findOne({ userName });
  } catch (error) {
    return res.status(500).json({ message: message.serverError });
  }

  if (existed) {
    return res.send({ message: "User already exist" });
  }

  let hashedPassword: any, salt: string | number;
  try {
    salt = await bcrypt.genSalt(12);
    hashedPassword = await bcrypt.hash(password, salt);
  } catch (error: any) {
    return res.send({ message: error.message });
  }
  const user = new User({
    userName,
    password: hashedPassword,
  });
  try {
    await user.save();
  } catch (error: any) {
    return res.send({ message: error.message });
  }
  res.json({ message: "Registered Successfully" });
};

// export const auth = async (req: any, res: any) => {
//   const { username, password } = req.body;

//   let user: any;
//   try {
//     user = await User.findOne({ username: username });
//   } catch (error:String) {
//     return res.send({ message: error.message });


//   if (!user || user.length > 0) {
//     res.send({ message: "Invalid User Credentials" });
//   }

//   let isValidPassword;

//   try {
//     isValidPassword = await bcrypt.compare(password, user.password);
//   } catch (error) {
//     res.send({ message: "Invalid User Credentials" });
//   }

//   if (!isValidPassword) {
//     res.send({ message: "Invalid User Credentials" });
//   }

//   const token = jwt.sign(
//     {
//       userId: user._id,
//       userFirstname: user.firstname,
//       userLastname: user.lastname,
//       userUsername: user.username,
//     },
//     `${process.env.JWT_KEY}`,
//     { expiresIn: "1d" }
//   );

//   res.json({ Token: token });
// };
