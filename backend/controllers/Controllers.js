const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({
      success: false,
      message: "Incorrect email or password",
    });
  }
  let check = await bcrypt.compare(password, user.password);
  if (!check) {
    return res.json({
      success: false,
      message: "Incorrect email or password",
    });
  }
  const token = await jwt.sign({ email }, process.env.SECRET_KEY);
  res.json({
    success: true,
    message: "Successfully logged in",
    email,
    token,
  });
};

const register = async (req, res) => {
  const { email, password } = req.body;
  const alreadyExist = await User.findOne({ email });
  if (alreadyExist) {
    return res.json({
      success: false,
      message: "User Already exists! Login to continue",
    });
  }
  const hashPass = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashPass });
  return res.json({
    success: true,
    message: "Successfully created your account! Please login to continue",
  });
};

module.exports = { register, login };
