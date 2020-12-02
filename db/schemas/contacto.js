const mongoose = require('mongoose');

const contactoSchema = new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true
    },
    telefono:{
        type:String,
        trim:true,
        required:true
    }
})


module.exports = contactoSchema;