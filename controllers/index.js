const express = require('express');
const router = express.Router();
const homepage = require('./homepage');
const signUp = require('./signup');



router.use("/", homepage);
router.use("/signup", signUp);






module.exports = router;