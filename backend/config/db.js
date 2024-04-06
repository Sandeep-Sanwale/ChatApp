const mongoose = require("mongoose");
const MONGO_URI = `mongodb://localhost:27017/chat-app`;

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(MONGO_URI,{
        
        });
        console.log(`MongoDB connected : ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error : ${error.message}`);
    }
}

module.exports= connectDB;