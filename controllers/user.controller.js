const debug = require('debug')('user controller')
const User = require('../models/user.model')

// Simple version, without validation or sanitation
const test = (req, res ) => {
    res.send('Testing user controller')
}

const create = (req, res) =>{
    const user = new User(req.body)

    user.save((err, newUser) => {
        if (err) return (err)
        res.send({ data: newUser, message: 'Succesfully create new user'})
    })
}

const getUserById = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) return (err)
        return res.send({data: user})
    })
}

const updateUser = (req, res) => {
    debug('update, req.body', req.body)
    User.findOneAndReplace(req.params.id, {$set: req.body}, (err, user) => {
        if (err) return (err)
        Object.assign(user, req.body)
        res.send({data : user, message: 'User updated'})
    })
}

const deleteUser = (req, res) => {
    User.findOneAndDelete(req.params.id, (err, user) => {
        if (err) return (err)
        res.send({deletedData: user, message: 'Successfully delete user'})
    })
}

const getUsers = (req, res) => {
    User.find({}, (err, users) =>  {
        if (err) return (err)
        const userList = []
    
        users.forEach((user)=> {
            userList.push(user)
        })
    
        res.send({data: userList})
      })
}

module.exports = {
    test,
    create,
    getUserById,
    updateUser,
    deleteUser,
    getUsers,
}