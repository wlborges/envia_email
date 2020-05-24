const {Router} = require('express');

const route = router();

route.get('/', (request, response) => response.send('Hello world!'))

module.exports = route;