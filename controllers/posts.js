const db = require("../routes/db-config");

const getPost = async(req, res) => {

    if(!req.user) return res.redirect("/login");

    const postId = req.params.postId;

    if(!postId) return res.render("posts.ejs", {post: ""});

    db.query('SELECT * FROM posts WHERE id = ?', [postId], async(Err, postResult) => {
        if(Err) throw Err;
        if(!postResult.length) return res.render("posts.ejs", {post: ""});
        
        db.query('SELECT * FROM users WHERE id = ?', [postResult[0].user_id], async(Err, userResult) => { //Search user with entered email
            if(Err) throw Err;
            if(!postResult.length) return res.render("posts.ejs", {post: ""});

            let post = {
                title: postResult[0].title,
                user: userResult[0],
                content: postResult[0].content,
            }

            return res.render("posts.ejs", {post: post});
        })
    });

}

module.exports = getPost;