const User = require('../models/User');

exports.create = (username, password) => User.create({username, password})

exports.login = (user) =>  User.findOne({username: user})