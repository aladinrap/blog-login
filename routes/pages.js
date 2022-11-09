const express = require("express");
const loggedIn = require("../controllers/loggedin")
const logout = require("../controllers/logout");
const getPost = require("../controllers/posts");
const getProfile = require("../controllers/profile");
const newpost = require("../controllers/newpost");
const router = express.Router();


router.get("/", loggedIn, (req, res) => {
    if(req.user) {
         res.render("index.ejs", {status: "ok", user: req.user, welcomeMessage: "Welcome to my site, "});
     }else {
     res.render("index.ejs", {status: "no", user: "nothing"});
     }
 })
 router.get("/newpost", loggedIn, (req, res) => {
    if(req.user) {
        res.render("newpost.ejs", {status: "ok", user: req.user, welcomeMessage: "Welcome to my site, "});
     }else {
        res.sendFile("login.html", { root: "./public"});
     }
 })

router.get("/profile", loggedIn, getProfile)

router.get("/post/:postId", loggedIn, getPost)

router.get("/register", (req, res) => {
    res.sendFile("register.html", { root: "./public"});
})
router.get("/login", (req, res) => {
    res.sendFile("login.html", { root: "./public"});
})

router.get("/logout", logout)
module.exports = router;