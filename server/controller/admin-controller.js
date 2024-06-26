const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// Update user
const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserdata = req.body;
    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updatedUserdata,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

// Fetch single User info/data
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

// delete users by id
const deleteUserid = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ Message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts) {
      return res.status(404).json({ message: "No Contact Found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserid,
  getUserById,
  updateUserById,
  deleteContactById
};
