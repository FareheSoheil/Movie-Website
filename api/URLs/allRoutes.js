let movie = require('./MovieAPIS');
let search = require('./SearchAPIs');
let comment = require('./CommentAPIs');

module.exports = [].concat(movie, search,comment);
