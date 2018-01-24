let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let commentSchema = new Schema({
  Created_At: { type: Date, default: Date.now },
  movieId:String,
  directingVote:Number,
  actingVote:Number,
  screenVote:Number,
  author:String,
  comment:String,
  radioValue:String,
});
module.exports = mongoose.model('comments', commentSchema);
