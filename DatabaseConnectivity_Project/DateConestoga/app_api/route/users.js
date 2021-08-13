const express = require('express');
const Router = express.Router();
const ctrlUser = require('../controllers/users');

Router.get('/users', ctrlUser.getUsers)
        .post('/users', ctrlUser.createUser);

Router.get('/users/:Userid', ctrlUser.getSingleUser)
        .put('/users/:Userid',ctrlUser.updateUser)
        .delete('/users/:Userid', ctrlUser.deleteUser);

module.exports = Router;