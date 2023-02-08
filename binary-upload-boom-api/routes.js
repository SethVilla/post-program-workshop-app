const express = require("express");
const {pool} = require("./config/db/index.js")

const router = express.Router();

router.get("/feed", (req, res) => {
    pool.query('Select * FROM posts', (err, res) => {
        if (err) return console.log(err);
        console.log(res)
    } )
    res.json("Hello World");
})

router.post("/login", (req, res) => {
    res.json({
        username: "seth",
        password: "test",
        firstName: "seth",
        lastName: "seth"
    })
})

module.exports = router;
