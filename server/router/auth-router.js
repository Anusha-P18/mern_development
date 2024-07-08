const express = require("express");

const router = express.Router();

// const { home, register } = require("../controllers/auth-controllers");
const authcontrollers = require("../controllers/auth-controllers");

// router.get("/", (req, res) => {
//     res.status(200).send('welcome to main page by router');
// });

router.route("/").get(authcontrollers.home);

router.route("/register").get(authcontrollers.register);

module.exports = router;