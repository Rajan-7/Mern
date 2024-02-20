const User = require("../models/user-model");
const bcrypt = require("bcrypt");

// Home page
const home = async (req, res) => {
  try {
    res.status(200).send("Controller Mern page");
  } catch (error) {
    console.log(error);
  }
};

// Registration page
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "Email already exist" });
    }

    const userCreateData = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      msg: "Registration Successfull",
      token: await userCreateData.generateToken(),
      userId: userCreateData._id.toString(),
    });
    // console.log(resData);
  } catch (error) {
    // res.status(500).send("Interval server error");
    next(error);
  }
};

// Login page

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      res.status(400).json({ msg: "Invalid Credential" });
    }

    const user = await userExist.comparePass(password);

    if (user) {
      res.status(200).json({
        msg: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

// To send the user data -> User Logic
const user = async (req, res) => {
  try {
    const userData = req.user;
    // console.log(userData);
    res.status(200).json({ userData });
  } catch (error) {
    console.error(`An error from the user route ${error}`);
  }
};

module.exports = { home, register, login, user };
