const express = require('express')
const morgan = require('morgan')
const app = new express();
app.use(morgan('dev'));


const movieRoutes = require('./routes/movieroutes');
app.use('/movies',movieRoutes);
require('dotenv').config();
const PORT = process.env.PORT
require('./db/connection');

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);//template literal-backtick
})









//.env-sensitivedata(mongodb connection string,port number)
//.env file access using dotenv third party module
//third party module mongoose used to connect database