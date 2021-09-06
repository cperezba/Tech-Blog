const router = require('express').Router();

const homepage = require('./homepage-route');
const signUp = require('./signup');
const api = require('./api/00-index');
const dashboard = require('./dashboard');


router.use("/", homepage);
router.use("/api", api)
router.use("/signup", signUp);
// router.use("/signout", signOut);
router.use("/dashboard", dashboard);






module.exports = router;