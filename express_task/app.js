const express= require('express');
const path = require('path');
const app=new express();


app.use(express.static('public'));

const basicRoutes=require('./routes/basicroutes');

app.use('/',basicRoutes);









app.listen('4000',()=>{
    console.log("Server running on PORT 4000");
})