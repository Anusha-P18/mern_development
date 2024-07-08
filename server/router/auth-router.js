const express = require("express");

const router = express.Router();

// router.get("/", (req, res) => {
//     res.status(200).send('welcome to main page by router');
// });

router.route("/").get((req, res) => {
    res.status(200).send('welcome to main page by router');
});

router.route("/register").get((req, res) => {
    res.status(200).send('welcome to register page by router');
});

module.exports = router;