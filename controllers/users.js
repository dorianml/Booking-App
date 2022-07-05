const users = require('../models/users')

exports.getAllUsers = async (req, res) => {
    try {
        const getAllUsers = await users.find()
        res.send('List of All the Users')
    } catch {
        res.sendStatus(200)
    }
}
exports.getOneUser = async (req, res) => {
    try {
        const getOneUser = await users.find({ _id : req.params._id})
        res.send(`You selected ${getOneUser} only`)
    } catch { 
        res.sendStatus(200)
    }
}
exports.postOneUser = async (req, res) => {
    try {
        let newUser = new users({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            gender: req.body.gender
        })
        res.send(`New User ${newUser.firstname} created`)
        newUser.save()
    } catch {
        res.sendStatus(200)
    }
}
exports.updateUser = async (req, res) => {
    try {
        const updateUser = await users.findOneAndUpdate(
            {_id : req.params._id},
            {firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            gender: req.body.gender 
            })
        res.send(`User ${users.firstname} is now UPDATED`)
    } catch {
        res.sendStatus(200)
    }
}
exports.deleteUser = async (req, res) => {
    try {
        await users.findOneAndDelete({ _id : req.params._id})
    } catch {
        res.sendStatus(200)
    }
}

