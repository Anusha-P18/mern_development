const express = require("express");
const router = express.Router();
const allServices = require("../controllers/service-controllers")

router.route("/services").get(allServices);

module.exports = router;