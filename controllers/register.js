const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const email = req.body.email;
    const Npassword = req.body.password;
    if( !email || !Npassword ) return res.json({ststus: "error", error:"Please Enter your email and password"});
    else {
        console.log(email);
        db.query('SELECT email FROM users WHERE email = ?', [email], async(err, result) => {
           if(err) throw err;
           if(result[0]) return res.json({ status: "error", message: "Email has already been registred"}) 
            else {
                const password = await bcrypt.hash(Npassword, 8);
                console.log(password);
                db.query('INSERT INTO users SET ?', {email:email, password:password}, (error, results) => {
                    if(error) throw error;
                    return res.json({status: "success", message: "User has been registred"})
                })
            }
        })
    }
}

module.exports = register;