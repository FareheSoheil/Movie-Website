'use strict';

const Hapi = require('hapi');
var routes = require('./URLs/MovieAPIS');




const server = new Hapi.Server();
server.connection({ port: 8060, host: 'localhost' });



server.route(routes);


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
