const mongoose = require('mongoose');

var userScheme = new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    fullName : {
        type : String,
        required: true
    },
    city : {
        type : String,
        required : true
    },
    age : {
        type: Number,
        required: true,
        min : 18,
        max : 60
    },
    gender : {
        type: String,
        required: true
    },
    smoke: {
        type: Boolean
    },
    drink: {
        type: Boolean
    },
    description : {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileCreated : {
        type: Date,
        required: true
    }
});
mongoose.model('User', userScheme);