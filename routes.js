const {Router} = require('express');
const sendMail = require('./Controller/SendController');

const route = Router();

route.get('/', (request, response) => response.send('Hello world!'))

route.post('/send', sendMail.sendMail);

module.exports = route;