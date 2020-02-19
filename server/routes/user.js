// import everything

const express = require("express");
const router = express();
const signupController = require("../controllers/signupController");

router.post("/signup", signupController);


module.exports= router;
