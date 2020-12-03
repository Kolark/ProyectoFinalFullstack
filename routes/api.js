const express = require('express');

const Lugar = require('../db/models/lugar')
const Usuario = require('../db/models/usuario')
const router = new express.Router();



//GET [TODOS LOS LUGARES]
router.get('/lugares',async(req,res)=>{
    try{
        const lugares = await Lugar.find({});
        res.send(lugares);
        console.log('pidiendo el get')
    }
    catch(e){
        res.status(500).send({
            message:'Error inesperado'
        })
    }
    
})
//GET [lOS LUGARES MAS PARECIDOS EN NOMBRE]
router.get('/lugares/:name',async(req,res)=>{
    try{
        const name = req.params.name;

        const lugares = await Lugar.find({nombre:new RegExp('^'+name)});
        res.send(lugares);
        console.log('pidiendo el get')
    }
    catch(e){
        res.status(500).send({
            message:'Error inesperado'
        })
    }
})
//GET [LUGARES POR UN USUARIO]
router.get('/lugares/byemail/:user',async(req,res)=>{
    try{
        const useremail = req.params.user;
        const _user = await Usuario.findOne({email:useremail})
        const lugares = await Lugar.find({usuario:_user._id});
        res.send(lugares);
        console.log('pidiendo el get')
    }
    catch(e){
        res.status(500).send({
            message:'Error inesperado'
        })
    }
})
//GET [LUGARES POR UN CIUDAD]
router.get('/lugares/byciudad/:ciudad',async(req,res)=>{
    try{
        const nombreciudad = req.params.ciudad;
        const lugares = await Lugar.find({nombre:new RegExp('^'+nombreciudad)});
        res.send(lugares);
    }
    catch(e){
        res.status(500).send({
            message:'Error inesperado'
        })
    }
})

    
//POST
router.post('/lugares',async(req,res)=>{
try{
    const datalugar = req.body;
    

    const _user = await Usuario.findOne({email:datalugar.usuario})

    datalugar.usuario = _user._id;

    console.log(datalugar)

     const lugar = new Lugar(datalugar);

     await lugar.save();
     res.send(lugar);
}
catch(e){
    res.status(500).send({
        message:'Error inesperado'
    })
}
});


//POST usuario
router.post('/usuario',async(req,res)=>{
    try{
        const dataUsuario = req.body;
        const user = new Usuario(dataUsuario);
    
        await user.save();
        res.send(user);
    }
    catch(e){
        res.status(500).send({
            message:'Error inesperado'
        })
    }
    });




router.use((req,res)=>{
    res.sendStatus(404)
});

module.exports = router