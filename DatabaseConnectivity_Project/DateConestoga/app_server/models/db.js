const mongoose = require('mongoose');
var gracefulShutdown;

const password =  encodeURIComponent('Password123!');
var dbURI = "mongodb+srv://admin:"+password+"@cluster0.ejspr.mongodb.net/DateConestogaDB?retryWrites=true&w=majority";
mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to DateConestogaDB : ' + dbURI);
});

mongoose.connection.on("error", function(err){
    console.log('Mongoose connection error: ', err);
});

mongoose.connection.on("disconnected", function(){
    console.log('Mongoose Disconnected.');
});

gracefulShutdown = function(msg, callback){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through' + msg);
    });
};

require('./users');