const express = require('express');

const Lugar = require('../db/models/lugar')
const router = new express.Router();



//GET
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
    
//POST
router.post('/lugares',async(req,res)=>{
try{
    const datalugar = req.body;
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




router.use((req,res)=>{
    res.sendStatus(404)
});

module.exports = router