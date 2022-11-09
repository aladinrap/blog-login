const e = require("express");
const db = require("../routes/db-config")

const getProfile = (req, res) => {
    if(req.user) {
        db.query("SELECT * FROM posts WHERE user_id = ?", [req.user.id], (err, result) => {
            if(err) throw err;
            if(!result.length){ 
                res.render("profile.ejs", {status: "ok", user: req.user, profileMessage: "This is your profile, "});
            } else{
                let user = req.user;
                user.posts = result;
                res.render("profile.ejs", {status: "ok", user: user, profileMessage: "This is your profile, "});
            }
        });
    }else {
        res.redirect("/login");
    }
}

module.exports = getProfile;