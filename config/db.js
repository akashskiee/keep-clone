const mongoose = require('mongoose');
require('dotenv').config;

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/keeperDB', 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log("MongoDB connected sucessfully");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
