const express=require('express');
const morgan=require('morgan');//status 
const app = new express();
app.use(morgan('dev'));
app.set('view engine','ejs');
//console.log(__dirname);
app.set('views',__dirname+'/views');
const basicRoutes=require('./routes/basicroutes');
app.use('/basic',basicRoutes);//redirect to basicRoutes







app.listen(4000,()=>{
    console.log('Server running on PORT 4000');
})