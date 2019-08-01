const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: '*', methods: 'GET,POST' }));

app.use('/', express.static('./dist'));

console.log('Serving on 0.0.0.0:6262!');
app.listen(6262, '0.0.0.0');
