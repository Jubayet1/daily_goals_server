const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/userModel");

//method POST
//url (api/users)
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //   checking if all form filled ro not
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please add all form");
  }

  //   checking if email already exists or not
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }

  //   hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //   creating user
  const user = await User.create({ name, email, password: hashedPassword });
  if (user) {
    res.status(201).json({ _id: user._id, name: user.name, email: user.email });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//method POST
//url (api/users/login)
const LogInUser = asyncHandler(async (req, res) => {
  // const { name, email, password } = req.body;
  // //   checking if all form filled ro not
  //   if (!name || !email || !password) {
  //     res.status(400);
  //     throw new Error("please add all form")
  //   }
  // //   checking if email already exists or not
  //   const userExists = await User.findOne({email})
  //   if (userExists) {
  //     res.status(400)
  //     throw new Error("user already exists")
  //   }
  // //   hashing password
  //   const salt = await bcrypt.genSalt(10)
  //   const hashedPassword = await bcrypt.hash(password, salt)
  // //   creating user
  //   const user = await User.create({name, email, password: hashedPassword})
  //   if(user) {
  //     res.status(201).json({_id: user._id, name: user.name, email: user.email})
  //   } else {
  //     res.status(400)
  //     throw new Error("Invalid user data")
  //   }
});

//method GET
//url (api/users)
const getMe = asyncHandler((req, res) => {
  res.status(200).json({ message: "Display User" });
});

module.exports = { registerUser, LogInUser, getMe };
