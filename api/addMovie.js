var mongoose = require('mongoose');
var Movie = require('./db_schemas/movie_schema');

//connect to db
mongoose.connect('mongodb://localhost:27017/CeitMovie');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
var a1= db.once('open',function(){

    var new_movie = new Movie({
        Title:"a",
        // Created_At: { type: Date, default: Date.now },
        Original_Title:"ab",
        Year:111,
        Released:"asdfsd",
        Director:"asdfwef",
        Runtime:"asdqefw",
        imdbVotes:"afwqr",
        Language:"Asfwef",
        Country:"asdwegf",
        Plot:"afewgfbv",
        Actors:["as","dvdsv","rrgvd"],
        Writer:["111","222","333"]
    });
    new_movie.save(function(err){
        if(err) console.log(err);
        else { console.log("created");}
    });
});