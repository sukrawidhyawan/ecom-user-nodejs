'use strict'

const mongoose = require('mongoose')

// see : https://mongoosejs.com/docs/connections.html
const db = mongoose.connect('mongodb://username:password@host:port/database?options...')

module.exports = db
