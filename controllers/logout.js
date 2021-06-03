module.exports = (req, res) => {
    req.session.destroy(() => {
        // console.log("ASAS" + req.session.)
        res.redirect('/')
    })
}