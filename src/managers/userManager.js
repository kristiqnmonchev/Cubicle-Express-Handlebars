const User = require('../models/User');
const jwt = require('../lib/jwt')


exports.create = (username, password) => {
    User.create({username, password})

}

exports.login = (username) => User.findOne({username});