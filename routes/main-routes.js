const express = require('express')
const user = require('./user.route')

const app = express()

// List main route
app.use('/user', user)

module.exports = app