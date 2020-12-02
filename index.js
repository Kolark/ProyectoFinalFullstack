require('dotenv').config()
const express = require('express')
const app = express()
const viewsRoutes = require('./routes/views')
//Use
app.use(express.static('public'))
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.json())
app.set('view engine','ejs')
app.use(viewsRoutes)

app.listen(process.env.PORT,()=>{
    console.log('Listening on port'+ process.env.PORT)})
