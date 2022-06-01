const express = require("express");
const controller = require("../controller/userController");
const router = express.Router();

/* GET users listing. */
router.get("/", controller.index);

module.exports = router;
