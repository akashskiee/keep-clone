const mongoose = require('mongoose');
require('dotenv').config;

const connectDB = async () => {
    try {
        const dbUser = process.env.DB_USER;
        const dbPassword = process.env.DB_PASS;
        const dbUrl = `mongodb+srv://${dbUser}:${dbPassword}@cluster0-qnmpu.mongodb.net/keeperDB`
        if(process.env.ENV === 'PROD'){
        await mongoose.connect(dbUrl, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    } else {
        await mongoose.connect('mongodb://localhost:27017/keeperDB', 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log("Development MongoDB connected sucessfully");
    }
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
