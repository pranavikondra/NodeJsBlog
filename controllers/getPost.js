const Post = require('../database/models/post')
module.exports = async (res, req) => {
    const post = await Post.findById(req.params.id)
    res.render('post', {
        post
    })
}