const express = require('express')

const router = new express.Router();

router.get('/',(req,res)=>{
    // res.sendFile('/views/index.html',{root:__dirname})
    res.render('index');
})

router.get('/about',(req,res)=>{
    // res.sendFile('/views/about.html',{root:__dirname})
    res.render('about');
})

router.get('/buscar',(req,res)=>{
    // res.sendFile('/views/about.html',{root:__dirname})
    res.render('buscar');
})

router.get('/registrar_u',(req,res)=>{
    // res.sendFile('/views/about.html',{root:__dirname})
    res.render('reg_user');
})
router.get('/registrar_l',(req,res)=>{
    // res.sendFile('/views/about.html',{root:__dirname})
    res.render('reg_lugar');
})

router.use((req,res)=>{
    // res.status(404).sendFile('/views/index.html',{root:__dirname})
    res.status(404).render('404')
})

module.exports = router;