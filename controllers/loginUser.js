const bcrypt = require('bcrypt')
const User = require('../database/models/User')
module.exports = (req, res) => {

    const { email, password } = req.body;
    //finding user
    User.findOne({ email }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    res.redirect('/')
                }
                else {
                    res.redirect('/auth/login')
                }
            })
        }

    })
}
