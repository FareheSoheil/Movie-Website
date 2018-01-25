let mongoose = require('mongoose');
let Movie = require('../db_schemas/movie_schema.js');

module.exports = [
  {
    method: 'GET',
    path: '/search/{q}',
    handler: function (request, reply)  {
      //connect to db
      mongoose.connect('mongodb://localhost:27017/CeitMovie');
      let db = mongoose.connection;

      //prepare the query
      // let lowerArray = request.params.q.toLowerCase().split(' ');
      // let finalString = '';
      // for (let i=0;i<lowerArray.length;i++){
      //   let res = lowerArray[i].charAt(0).toUpperCase()+lowerArray[i].slice(1);
      //   finalString += res+' ';
      // }
      // { $regex: /Ghost/, $options: 'i' }
      // finalString.slice(0,-1)
      //once connected , do stuff
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', function () {
        let name = request.params.q;
        // name = name+;
        console.log("this is fixed name : "+new RegExp(name));
        let mvs = Movie.find({'Title':{ $regex:new RegExp(name)  , $options: 'i' }}).limit(1);
        console.log("this is params : "+request.params.q);
        mvs.exec(function (err, movie) {
          mongoose.connection.close();
          console.log("this is movie : "+movie);
          reply(movie);
          let i=0;
          movie.forEach(function (m) {
            i++;
            console.log(i+" date :"  + mongoose.Types.ObjectId(m._id));
            // console.log("name : " + m.Title);
          })
          //doSomethingHere
        })
      });
      console.log("this is from another file");
    }
    },
];
