const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    image: {
        type: String,
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post