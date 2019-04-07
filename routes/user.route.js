const express = require('express')
const router = express.Router()

// Require the controllers WHICH WE DID NOT CREATE YET!!
const { test, create, getUserById, updateUser, deleteUser, getUsers } = require('../controllers/user.controller')


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', test)

// Simple CRUD
router.post('/create', create)
router.get('/get/:id', getUserById)
router.get('/list/', getUsers)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router
