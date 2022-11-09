const express = require("express");
const db = require("../routes/db-config");
const jwt = require("jsonwebtoken")
const loggedIn = require("../controllers/loggedin");


    const newpost = (req, res) => {
            const title = req.body.title;
            const content = req.body.content;
            const userid = req.body.userid;
                    if(!title || !content )
                    return res.json({status: "error", error:"Please enter title and content!"}) 
                    else {
                    console.log(title);
                    console.log(content);
                    console.log(userid);
                    db.query('INSERT INTO posts SET ?', {user_id:userid, title:title, content:content}, (req, results) => {
                    return res.json({status: "success", message: "Post has been upload!"})
                    });
                }
            }

    
    module.exports = newpost;

