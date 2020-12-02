const mongoose = require('mongoose')
const lugarSchema = require('../schemas/lugar')
const lugarModel = new mongoose.model('Lugar',lugarSchema);

module.exports = lugarModel;