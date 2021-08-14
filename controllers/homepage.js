const express = require('express');
const { builtinModules } = require('module');

const router = express.Router();



router.get('/', async (req, res) => {
    try {
        res.json("Your new webpage!")


    } catch (err) {

        res.status(500).json(err);
    }
});





module.exports = router;