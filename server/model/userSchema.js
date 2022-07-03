const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')



const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    cpassword : {
        type : String,
        required : true
    },
    role : {
        type : Boolean
    },
    tokens : [
        {
            token : {
                type : String,
                required : true
            }
        }
    ],

})

const User = mongoose.model('USER',userSchema);

module.exports = {
    User,
    
};
