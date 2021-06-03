const User = require("../database/models/User")

module.exports = (req, res, next) => {
    if (req.session.userId) {
        console.log("in redirect")
        return res.redirect('/')
    }
    next()
}
