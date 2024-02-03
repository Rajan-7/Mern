const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).send("Controller Mern page");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
   
    const {username,email,phone,password} = req.body;

    const userExist = await User.findOne({email});

    if(userExist){
      return res.status(400).json({msg:"Email already exist"});
    }

    const resData = await User.create({username,email,phone,password});

    res.status(200).json({resData});
    // console.log(resData);
  } catch (error) {
    res.status(400).send({ msg: "Page not found" });
  }
};

module.exports = {home,register};
