const mongoose = require('mongoose');
const User = mongoose.model('User');


module.exports.getUsers = function(req, res){
    User.find().exec((err, UserData) => {
        if(err){
            res.status(404).json(err);
        }
        res.status(200).json(UserData);
    });
};

module.exports.createUser = function(req, res){
    User.create({
        userName : req.body.userName,
        fullName : req.body.fullName,
        city: req.body.city,
        age : req.body.age,
        gender : req.body.gender,
        description : req.body.description,
        smoke : req.body.smoke,
        drink : req.body.drink,
        email : req.body.email,
        password : req.body.password,
        profileCreated: Date.now()
    }, (err, UsersData) => {
        if(err){
            res.status(400).json(err);
            return;
        }else{
            res.status(201).json(UsersData);
            return;
        }
    });
};

module.exports.getSingleUser = function(req, res){
    if(!req.params.Userid){
        res.status(404).json({'message' : 'Userid Invalid!'});
        return;
    }
    User.findById(req.params.Userid).exec((err, UsersData) => {
        if(err){
            res.status(400).json(err);
            return;
        }
        else if(!UsersData){
            res.status(404).json({'message': 'Userid does not exists'});
            return;
        }
        res.status(200).json(UsersData);
    });
};

module.exports.updateUser = function(req, res){
    if(!req.params.Userid){
        res.status(404).json({'message' : 'Userid Invalid!'});
        return;
    }
    User.findById(req.params.Userid).exec((err, UsersData) => {
        if(err){
            res.status(400).json(err);
            return;
        }
        else if(!UsersData){
            res.status(404).json({'message': 'Userid does not exists'});
            return;
        }

        UsersData.userName = req.body.userName;
        UsersData.fullName = req.body.fullName;
        UsersData.city = req.body.city;
        UsersData.age = req.body.age;
        UsersData.gender = req.body.gender;
        UsersData.description = req.body.description;
        UsersData.smoke = req.body.smoke;
        UsersData.drink = req.body.drink;
        UsersData.email = req.body.email;
        UsersData.password = req.body.password;

        UsersData.save((err, UsersData) => {
            if(err){
                res.status(404).json(err);
                return;
            } else {
                res.status(200).json(UsersData);
                return;
            }
        });
    });
};

module.exports.deleteUser = function(req, res){
    if(!req.params.Userid){
        res.status(404).json({'message' : 'Invalid Userid'});
    } else {
        User.findByIdAndRemove(req.params.Userid).exec((err, UsersData) => {
            if(err){
                res.status(404).json(err);
                return;
            }
            else{
                res.status(204).json(null);
            }
        });
    }
};