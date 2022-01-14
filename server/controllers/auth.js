import User from "../models/user";
import { hashPassword, comparePassword } from "../helpers/auth";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  // console.log("register endpoint =>", req.body);
  const { name, email, password, secQuestion } = req.body;
  //Check validation of information
  if (!name) return res.status(400).send("Name is required");
  if (!email) return res.status(400).send("Email is required");
  if (!password) return res.status(400).send("Password is required");
  if (password.length < 6)
    return res.status(400).send("Password should be longer than 6 characters");
  if (!secQuestion) return res.status(400).send("Answer is required");
  //Find whether email is existed
  const exist = await User.findOne({ email });
  if (exist) return res.status(400).send("Email is existed");

  //hash password
  const hashedPassword = await hashPassword(password);

  //Store users' information
  const user = new User({ name, email, password: hashedPassword, secQuestion });
  try {
    await user.save();
    //console.log(user);
    return res.json({
      ok: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error, try again");
  }
};

export const login = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    //check whether it's an registered user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("Please registered at first.");
    //check password
    const match = await comparePassword(password, user.password);
    if (!match) return res.status(400).send("Wrong password");

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    user.password = undefined;
    user.secQuestion = undefined;
    res.json({
      token,
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send("There is an error. Please try again");
  }
};
