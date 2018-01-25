let mongoose = require('mongoose');
const fs = require('fs');
let Movie = require('../db_schemas/movie_schema.js');

module.exports = [

    {//get Recently added movies
      method: 'GET',
      path: '/movies/recent/{number}',
      handler: function (request, reply)  {
        //connect to db
        mongoose.connect('mongodb://localhost:27017/CeitMovie');
        let db = mongoose.connection;
        //once connected , do stuff
        db.on('error', console.error.bind(console, 'connection error:'));
        let a1 = db.once('open', function () {
          let mvs = Movie.find({}).sort([['Created_At', -1]]).limit(request.params.number);
          mvs.exec(function (err, movie) {
            mongoose.connection.close();
            reply(movie);
          })
        });

      }
    },
    {//get all available movies
      method: 'GET',
      path: '/movies/all',
      handler: function (request, reply)  {
        //connect to db
        mongoose.connect('mongodb://localhost:27017/CeitMovie');
        let db = mongoose.connection;
        //once connected , do stuff
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
          let mvs = Movie.find({});
          mvs.exec(function (err, movie) {
            mongoose.connection.close();
            reply(movie);
          })
        });

      }
    },
    {//get movie details
      method: 'GET',
      path: '/movies/{id}/details',
      handler: function (request, reply)  {
        //connect to db
        mongoose.connect('mongodb://localhost:27017/CeitMovie');
        let db = mongoose.connection;
        //once connected , do stuff
        db.on('error', console.error.bind(console, 'connection error:'));
        let a1 = db.once('open', function () {
          let id = request.params.id;
          let mvs = Movie.find({'_id':id});
          mvs.exec(function (err, movie) {
            mongoose.connection.close();
            reply(movie);
          })
        });
      }
    },
    {
      method: 'POST',
      path: '/submit',
      handler: function (request,reply) {
        //connect to db
        mongoose.connect('mongodb://localhost:27017/CeitMovie');
        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        //when connected : do ur stuff
        //get request's body
        let paylod = request.payload;
        console.log("payload is ");
        console.log(paylod);

        db.once('open', function () {
          let new_movie = new Movie({
            Title:paylod.Title,
            Year:paylod.Year,
            Released:paylod.Released,
            Director:paylod.Director,
            Runtime:paylod.Runtime,
            imdbVotes:paylod.imdbVotes,
            Language:paylod.Language,
            Country:paylod.Country,
            Genre:paylod.Genre,
            Ratings:paylod.Rating,
            Plot:paylod.Plot,
            Actors:paylod.Actors,
            Writer:paylod.Writer,
            Poster:paylod.Cover
          });
          new_movie.save(function(err){
            if(err) {console.log(err);reply("failure");}
            else { console.log("created");reply("success");}
          });
        });
      }
    }

];
