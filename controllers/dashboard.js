const router = require('express').Router();
const { Blog } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Blog.findAll();
        console.log(postData);

        const posts = postData.map((post) => post.get({ plain: true }));
        console.log("Posts", posts);

        res.render('dashboard', {
            posts
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



router.post('/', withAuth, async (req, res) => {
    console.log(req.body);
    try {
        const userData = Blog.create({
            title: req.body.title,
            content: req.body.content,
        });
        console.log(userData);
        res.status(200).json(userData);
    } catch (err) {


        res.status(500).json(err);
    }

});





module.exports = router;