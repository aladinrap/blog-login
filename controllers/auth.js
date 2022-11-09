const express = require("express");
const register = require("./register");
const login = require("./login");
const newpost = require("./newpost");
const getPost = require("./posts");
const router = express.Router();

 router.post("/register", register)
 router.post("/login", login)
 router.post("/newpost", newpost)
 router.post("/post", getPost)


module.exports = router;