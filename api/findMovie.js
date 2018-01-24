'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

let routes = require('./URLs/allRoutes');

console.log(routes);

server.connection({ port: 8050, host: 'localhost' ,routes: { cors: true }});

server.route(routes);
// { method: 'GET',
//   path: '/api',
//   handler: function (request, reply) {
//     //connect to db
//     mongoose.connect('mongodb://localhost:27017/CeitMovie');
//     let db = mongoose.connection;
//
//     db.on('error', console.error.bind(console, 'connection error:'));
//     let a1 = db.once('open', function () {
//
//       let mvs = Movie.find({}, {}, function (err, movie) {
//         mongoose.connection.close();
//         reply(movie);
//         console.log("Username supplied" + movie);
//         //doSomethingHere
//       })
//     });
//   }
// });

server.start((err) => {

  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
