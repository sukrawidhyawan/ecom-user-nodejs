const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email: {type: String, required: true},
}, {collection: 'user'})


// Export the model
module.exports = mongoose.model('User', userSchema)