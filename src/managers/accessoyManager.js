const Accesory = require('../models/Accessory')

exports.create = (accesoryData) => Accesory.create(accesoryData);

exports.getAll = () => Accesory.find()

exports.getAvailable = (accesoriesIds) => Accesory.find({_id: {$nin: accesoriesIds}})