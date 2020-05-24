const {Router} = require('express');

const route = Router();

route.get('/', (request, response) => response.send('Hello world!'))

module.exports = route;