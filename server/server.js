const express = require("express");

const path = require('path');
// it adds all the enviornment variables to processe.env
require('dotenv').config({ path: path.resolve(__dirname, './utils/.env') });

const app = express();

const router = require("./router/auth-router");
const contactRouter = require("./router/contact-router");

const connectDb = require("./utils/db");

const errorMiddleware = require("./middlewares/error-middleware");

// middleware
app.use(express.json());

app.use("/api/auth", router);
app.use("/api/form", contactRouter);

// to check if there is any error during initial connection
app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`)
    })
});