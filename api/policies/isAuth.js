module.exports = async (req, res, next) => {
    if(req.session.me) {
        return next();
    }
    return res.redirect('/login');
}