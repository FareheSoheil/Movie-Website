'use strict';

const Hapi = require('hapi');
var mongoose = require('mongoose');



const server = new Hapi.Server();
server.connection({ port: 8070, host: 'localhost' });



server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {

        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        mongoose.connect('mongodb://localhost:27017/CeitMovie');
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {

            // we're connected!
            var kittySchema = mongoose.Schema({
                name: String
            });
            var Kitten = mongoose.model('Kitten', kittySchema);
            console.log("created");
            var silence = new Kitten({ name: request.params.name });
            console.log(silence.name);
            silence.save(function (err, silence) {
                if (err) return console.error(err);
                // fluffy.speak();
            });

        });
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
