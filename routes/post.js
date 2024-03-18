const express = require('express')
const router = express.Router()
const Post = require('../models/post')
const postController = require('../controllers/post')

router.post('/', async (req,res) => {
    try {
        const { content, author} = req.body
        const newPost = new Post({content, author})
        const savedPost = await newPost.save()
        res.json(savedPost)
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
})

router.get('/', async(req,res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
})

router.get('/:id', async(req,res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post) {
            return res.status(401).json({error: 'Post not found'})
        }
        res.json(post)
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
})

router.patch('/:id', async(req,res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!updatedPost) {
            return res.status(404).json({eror: 'Post not found'})
        }
        res.json(updatedPost)
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id)
        if (!deletedPost) {
            return res.status(404).json({error: 'Post not found'})
        }
        res.json({message: 'Post deleted succesfully'})
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
})

module.exports = router;