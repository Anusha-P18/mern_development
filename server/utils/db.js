const path = require('path');
// it adds all the enviornment variables to processe.env
require('dotenv').config({ path: path.resolve(__dirname, './.env') })
const mongoose = require("mongoose");
 
// connection with the DB
// const dbURL = "mongodb://127.0.0.1:27017/mern_admin";
const { DB_USER, DB_PASSWORD } = process.env;
const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@anusha-cluster-01.gb6st71.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Anusha-Cluster-01`;
// mongoose.connect(dbURL);

const connectDb = async() => {
    try {
        await mongoose.connect(dbURL);
        console.log("Database connected successfully");
    }catch (err) {
        console.error("database connection failed", err.error);
        process.exit(0);
    }
};

module.exports = connectDb;
// If we just create db then its not enough. We have to create collection.