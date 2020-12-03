const mongoose = require('mongoose')
const usuarioSchema = require('../schemas/usuario')
const usuarioModel = new mongoose.model('Usuario',usuarioSchema);

module.exports = usuarioModel;