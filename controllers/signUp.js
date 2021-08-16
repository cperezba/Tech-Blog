const express = require('express');
const router = express.Router();
const { User } = require("../models");
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = await User.create({
            username: req.body.username,
            password: hashedPassword,
        });
        res.status(200).json("Success!")
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});





module.exports = router;