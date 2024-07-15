const express = require("express");

const path = require('path');
// it adds all the enviornment variables to processe.env
require('dotenv').config({ path: path.resolve(__dirname, './utils/.env') });

const app = express();

const router = require("./router/auth-router");

const connectDb = require("./utils/db");

// middleware
app.use(express.json());

app.use("/api/auth", router);

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`)
    })
});