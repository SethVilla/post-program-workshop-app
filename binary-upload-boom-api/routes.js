const express = require("express");
const {pool} = require("./config/db/index.js")
const passport = require("passport");
const {createPost} = require("./services/cloudinary/cloudinary")
require("./config/passport/index.js")(passport);

const router = express.Router();

router.get("/feed", (req, res) => {
    pool.query('Select * FROM posts', (err, res) => {
        if (err) return console.log(err);
        console.log(res)
    } )
    res.json("Hello World");
})

router.post(
    "/auth/signup",
    passport.authenticate("local-signup", { session: false }),
    (req, res, next) => {
        console.log(req.user)
        res.json({
            uid: req.user.uid,
            firstName: req.user.firstname,
            lastName: req.user.lastname,
            username: req.user.username,
            email: req.user.email
        });
    }
);

router.post(
    "/auth/login",
    passport.authenticate("local-login", { session: false }),
    (req, res, next) => {
        console.log(req.user)
        res.json({
            uid: req.user.uid,
            firstName: req.user.firstname,
            lastName: req.user.lastname,
            username: req.user.username,
            email: req.user.email
        });
    }
);

router.post(
    "/post/upload",
    createPost
);



module.exports = router;
