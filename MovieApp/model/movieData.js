const mongoose = require('mongoose');
//Creating the SChema
const movieSchema  = mongoose.Schema({
    movieName:String,
    movieDirector:String,
    movieDescription:String,
    moviePrice:Number
})
//movieSchema map to the collection name movies(s automatically emit)
const movieData = mongoose.model('movie',movieSchema);
module.exports=movieData;//export the Schema