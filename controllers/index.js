const express = require('express');
const router = express.Router();
const homepage = require('./homepage');
const signUp = require('./signUp');



router.use("/", homepage);
router.use("/signUp", signUp);






module.exports = router;