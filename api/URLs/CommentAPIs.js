let mongoose = require('mongoose');
let Comment = require('../db_schemas/comment_schema.js');

module.exports = [
  {
    method: 'GET', path: '/movies/{id}/comments', handler: function (request,reply) {

  console.log("comment generator was GET called");
    mongoose.connect('mongodb://localhost:27017/CeitMovie');
    let db = mongoose.connection;
    console.log("trying to get db");
    //once connected , do stuff
    db.on('error', console.error.bind(console, 'connection error:'));

    let movieId = request.params.id;
    console.log("this is id ");
    console.log(movieId);
    let a1 = db.once('open', function () {
      let comments = Comment.find({'movieId':movieId}).sort([['Created_At', -1]]);

      comments.exec(function (err, comment) {
        mongoose.connection.close();
        reply(comment);
      })
    });
} },

  {
    method: 'POST',
    path: '/movies/{id}/comments',
    handler: function (request, reply) {
      console.log("Posting a comment ...");
      //connect to db
      mongoose.connect('mongodb://localhost:27017/CeitMovie');
      let db = mongoose.connection;
      console.log("trying to get db");
      //once connected , do stuff
      db.on('error', console.error.bind(console, 'connection error:'));

      let data = request.payload;
      console.log("this is paylod ");
      console.log(data);
      let a1 = db.once('open', function () {
        console.log("DB connected");
        let new_comment = new Comment({
          movieId:data.movieId,
          directingVote:data.directingVote,
          actingVote:data.actingVote,
          screenVote:data.screenVote,
          author:data.author,
          comment:data.comment,
          radioValue:data.radioValue,
        });
        new_comment.save(function(err){
          if(err){
            console.log(err);
            reply("Failed");
          }
          else {
            console.log("created");
            reply("Success");
          }
        });
      });

    }
  }
//   {
//     console.log("comment generator was POST called");
//     console.log(request.params);
//     console.log(request.payload);
//
// } }
];
