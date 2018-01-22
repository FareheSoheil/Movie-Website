'use strict';

const Hapi = require('hapi');




const server = new Hapi.Server();
server.connection({ port: 8050, host: 'localhost' });



server.route({
    method: 'GET',
    path: '/api/',
    handler: function (request, reply) {
        console.log("hi you knocked");
        reply('Hello, world!');
    }
});
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
