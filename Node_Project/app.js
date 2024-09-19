const express = require('express');
const morgan = require('morgan');
const app = new express();
app.use(morgan('dev'));




app.set('view engine','ejs');
app.set('views',__dirname+'/views');

app.use(express.static('public'));
const nav= [
    {
        link:'employee',name:'Home'
    },{
        link:'employeeform',name:'ADD Employee'
    }
]

const basicRoutes=require('./routes/basicroutes')(nav);

app.use('/user',basicRoutes);

app.listen('4000',()=>{
    console.log('Server is running on PORT 4000');
})