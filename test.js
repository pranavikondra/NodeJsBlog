const mongoose = require('mongoose')

const Post = require('./database/models/post')


mongoose.connect('mongodb://localhost:27017/dbname', { useNewUrlParser: true, useUnifiedTopology: true });
// Post.find({}, (error, post) => {

//     console.log(error, post)
// })
// Post.findById("6090f9fe2167490628893094", (error, posts) => {
//     console.log(error, post)
// })
// Post.findByIdAndDelete("60a2656c01221b1d28725122", (error, post) => {
//     console.log(error, post)
// })
// Post.create({
//     title: 'my second test blog',

//     description: ' second test blog description',

//     content: 'second lorem ipsum content.'
// }, (error, post) => {

//     console.log(error, post)
// })