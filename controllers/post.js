const Post = require('../models/post')

const getAllPosts = async(req,res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getPostById = async(req,res) => {
    const {id} = req.params
    try {
        const post = await Post.findById(id)
        if(!post) {
            return res.status(401).json({error: 'Post not found'})
        }
        res.json(post)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const createPost = async (req,res) => {
    const {content, author, timestamp, image } = req.body
    try {
        const post = new Post ({content, author, timestamp, image})
        await post.save()
        res.status(201).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const updatePost = async(req,res) => {
    const {id} = req.params
    const {content, author, timestamp, image} = req.body
    try {
        const post = await Post.findByIdAndUpdate(
            id,
            {content, author, timestamp, image},
            {new: true}
        )
        if(!post) {
            return res.status(404).json({message: 'Post not found'})
        }
        res.json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deletePost = async(req,res) => {
    const {id} = req.params
    try {
        const post = await Post.findByIdAndDelete(id)
        if(!post) {
            return res.status(404).json({message: 'Post not found'})
        }
        res.json(post)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
}