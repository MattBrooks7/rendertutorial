const User = require('../models/users')

const getAllUsers = async(req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getUserById = async(req,res) => {
    const {id} = req.params
    try {
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json
            ({error: 'User not found'})
        }
        res.json(user)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const createUser = async (req,res) => {
    const {firstName, lastName, email} = req.body
    try {
        const user = new User ({firstName, lastName, email})
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const updateUser = async (req,res) => {
    const {id} = req.params
    const {firstName, lastName, email} = req.body
    try {
        const user = await User.findByIdAndUpdate(
            id,
            {firstName, lastName, email},
            {new: true} 
        )
        if (!user) {
            return res.status(404).json({message: 'User not found'})
        }
        res.json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteUser = async(req,res) => {
    const {id} = req.params

    try {
        const user = await User.findByIdAndDelete(id)
        if(!user) {
            return res.status(404).json({error: 'User not found'})
        }
        res.json({message: 'User deleted succesfully'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}