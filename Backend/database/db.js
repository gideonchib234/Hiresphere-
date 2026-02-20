const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("mongoDB is connected");
    }catch(e){
        console.error("Error connecting to MONGODB", err);
        process.exit(1);
    }
};

module.exports = connectDB;