const express = require('express')
const router = express.Router()
const Post = require('../models/users')
const userController = require('../controllers/users')

router.post('/', async (req,res) => {
    try {
        const {firstName, lastName, email} =req.body 
        const newUser = new UserActivation({firstName, lastName, email})
        const savedUser = await newUser.save()
        res.json(savedUser)
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
})

router.get('/', async(req, res) => {
    try {
        const user = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({error: 'Internal Server error'})
    }
})

router.get('/:id', async(req,res) => {
    try {
        const user = await User.findbyId(req.params.id)
        if(!user) {
            return res.status(401).json({error: 'User not found'})
        }
        res.json(user)
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
})

router.patch('/:id', async(req,res) => {
    try {
        const updateUser = await User.findbyIdAndUpdate(req.params.id, req.body, {new: true})
        if (!updateUser) {
            return res.status(404).json({error: 'User not found'})
        }
        res.json(updateUser)
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }

    router.delete('/:id', async (req,res) => {
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id)
            if(!deletedUser) {
                return res.status(404).json({error: 'User not found'})
            }
            res.json({message: 'User deleted successfully'})
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'})
        }
    })
})