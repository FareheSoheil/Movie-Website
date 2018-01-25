var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    Title:String,
    Created_At: { type: Date, default: Date.now },
    Original_Title:String,
    Year:Number,
    Released:String,
    Director:String,
    Runtime:String,
    imdbVotes:String,
    Language:String,
    Country:String,
    Genre:String,
    Ratings:{type: Array , "default":[]},
    Plot:String,
    Actors:{type : Array , "default" : [] },
    Writer:{type : Array , "default" : [] },
    Poster:{}

});
module.exports = mongoose.model('movies', movieSchema);
