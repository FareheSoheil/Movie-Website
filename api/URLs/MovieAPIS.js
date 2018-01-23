let mongoose = require('mongoose');
let Movie = require('../db_schemas/movie_schema.js');

module.exports = [

    {
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
          // console.log("this is params : "+request.params.number);
          mvs.exec(function (err, movie) {
            mongoose.connection.close();
            reply(movie);
            let i=0;
            // movie.forEach(function (m) {
            //   i++;
            //   console.log(i+" date :"  + mongoose.Types.ObjectId(m._id));
            //   // console.log("name : " + m.Title);
            // })
            //doSomethingHere
          })
        });

      }
    },
    {
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

    {
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
          console.log("this is params : "+request.params.id);
          mvs.exec(function (err, movie) {
            mongoose.connection.close();
            reply(movie);
            let i=0;
            movie.forEach(function (m) {
              i++;
              console.log(i+" name :"  + m.Title);
              // console.log("name : " + m.Title);
            })
            //doSomethingHere
          })
        });
        console.log("this is from another file");
      }
      },
    { method: 'GET', path: '/movies/{id}/comments', handler: function () {} },
    { method: 'POST', path: '/movies/{id}/comments', handler: function () {} }
];
