const mongoose = require("mongoose");

// const URI ="mongodb://127.0.0.1:27017/mern_admin";
const URI =process.env.MONGO_URI;

const connectDb = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("Successful connection");
    } catch (error) {
        console.error("Connection failed",error.message);
        process.exit(0);
    }
};

module.exports = connectDb;