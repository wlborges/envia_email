const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => response.send('Hello world!'));

app.listen(process.env.PORT || 3000)