const mongoose = require('mongoose');

const lugarSchema = new mongoose.Schema({
    nombre:{
        type:String,
        trim:true,
        required:true
    },
    info:{
        tipo:{
            type:String,
            required:true
        },
        descripcion:{
            type:String,
            trim:true,
            required:true
            
        },
        costo:{
            type:Number,
            required:true
        }
    }
    ,
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario',
        required: true
    },
    direccion:{
        ciudad:{
            nombre: {
                type: String,
                required: true,
                trim: true,
            },
            pais: {
                type: String,
                required: true,
                trim: true
            }
        },
        coordenadas:{
            latitud:{
                type:Number,
                required:true
            },
            longitud:{
                type:Number,
                required:true
            }
        }
        
    }

})

lugarSchema.pre('save',()=>{
    console.log('hook')
})

module.exports = lugarSchema;

