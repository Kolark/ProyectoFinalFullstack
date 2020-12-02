require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const viewsRoutes = require('./routes/views')
const apiRoutes = require('./routes/api')
//Use
app.use(express.static('public'))
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.json())

app.set('view engine','ejs')

app.use('/api',apiRoutes)
app.use(viewsRoutes)

mongoose.connect(process.env.MONGODB_URI,
{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('Database connected')
}).catch((error)=>{
    console.log('Database connection failed');
    console.log(error);
})

app.listen(process.env.PORT,()=>{
    console.log('Listening on port'+ process.env.PORT)})
