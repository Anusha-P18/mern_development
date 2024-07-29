const express = require("express");

const cors = require("cors");

const path = require('path');
// it adds all the enviornment variables to processe.env
require('dotenv').config({ path: path.resolve(__dirname, './utils/.env') });

const app = express();

const router = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const serviceRouter = require("./router/service-router");

const connectDb = require("./utils/db");

const errorMiddleware = require("./middlewares/error-middleware");

// handling cors access policy
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    Credentials: true,
}

app.use(cors(corsOptions));

// middleware
app.use(express.json());

app.use("/api/auth", router);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRouter);

// to check if there is any error during initial connection
app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`)
    })
});