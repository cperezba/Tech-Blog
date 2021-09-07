const router = require('express').Router();
const { Blog } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', withAuth, async (req, res) => {
    try {
        if (req.session.loggedIn === true) {
            const postData = await Blog.findAll({
                where: {
                    user_id: req.session.userID,
                },
            });

            const posts = postData.map((post) => post.get({ plain: true }));

            res.render('dashboard', {
                posts
            });
        } else {
            res.redirect('/signup');
        }
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
            user_id: req.session.userID
        });
        console.log(userData);
        res.status(200).json(userData);
    } catch (err) {


        res.status(500).json(err);
    }

});





module.exports = router;