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
    console.log("--------Sign Up-------")
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
        const user = await User.create({
            username: req.body.username,
            password: hashedPassword,
        });
        
        req.session.save(() => {
            req.session.username = user.username;
            req.session.id = user.id;
            req.session.loggedIn = true;
            res.status(200).json(user);
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;