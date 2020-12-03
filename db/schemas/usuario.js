const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre:{
        type:String,
        trim:true,
        required:true,
        minlength:1
    },
    email:{
        type:String,
        trim:true,
        required:true,
        minlength:1
    },
    telefono:{
        type:String,
        trim:true,
        required:true,
        minlength:1
    }
})


module.exports = usuarioSchema;