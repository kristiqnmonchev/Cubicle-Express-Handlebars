const User = require('../models/User');

exports.create = (username, password) => User.create({username, password})