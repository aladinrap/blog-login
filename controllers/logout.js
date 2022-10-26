const logout = (req, res) => {
    res.clearCookie("userRegistred");
    res.redirect("/");
}
module.exports = logout;