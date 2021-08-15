const express = require('express');
const router = express.Router();
const { User } = require("../models/");

router.get('/', async (req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        res.status(200).json("Success!")
    } catch (err) {
        res.status(500).json(err);
    }
});





module.exports = router;