const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).send('welcome to main page');
});

app.get("/register", (req, res) => {
    res.status(200).send('welcome to register page');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`)
})