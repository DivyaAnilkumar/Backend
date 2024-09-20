const express = require('express');
const morgan = require('morgan');
const app = new express();
app.use(morgan('dev'));




app.set('view engine','ejs');// set view engine or template engine as ejs -html markup run
app.set('views',__dirname+'/views');//first views is keyword

app.use(express.static('public'));//pdf ,document,css,images,js files are static .public - foldername.
const nav= [
    {
        link:'/user/employee',name:'Home'
    },{
        link:'/user/employeeform',name:'ADD Employee'
    }
]

const basicRoutes=require('./routes/basicroutes')(nav);

app.use('/user',basicRoutes);

app.listen('4000',()=>{
    console.log('Server is running on PORT 4000');
})