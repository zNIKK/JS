const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    name: {type: String, required:true, minlength: 3 , maxlength: 50 },
    email: {type: String, required:true, minlength: 3 , maxlength: 100 },
    password: {type: String, required:true, minlength: 6 , maxlength: 200 },
    admin: {type: Boolean, default: false},
    createAt: {type: Date, default: Date.now }
})

module.exports = mongoose.model('User', usersSchema)
