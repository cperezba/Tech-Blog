const router = require('express').Router();
const { Blog } = require('../models');



router.get('/', async (req, res) => {
    try {
        const postData = await Blog.findAll();
        console.log(postData);
        const posts = postData.map((post) => post.get({ plain: true }));
        console.log("Posts", posts);

        res.render('homepage', {
            posts
        });
    } catch (err) {
        res.status(500).json(err);
    }
});





module.exports = router;