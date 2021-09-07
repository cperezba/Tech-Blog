const router = require('express').Router();

const homepage = require('./homepage-route');
const signup = require('./signUp');
const api = require('./api/index');
const dashboard = require('./dashboard');


router.use("/", homepage);
router.use("/signup", signup);
router.use("/api", api)
router.use("/dashboard", dashboard);






module.exports = router;
