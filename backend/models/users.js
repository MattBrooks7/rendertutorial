const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {

    },
    // profile: {
    //     type: 
    // },
    posts: {
        type: String,
    },
    games: {
        type: String,
    }
})

const Post = mongoose.model('User', userSchema)

module.exports = Post