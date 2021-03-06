const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const createCheckoutSession = require('./checkout-session')

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors({ origin: true }));

app.get('/', (req, res) => res.send('Hello world'));

app.listen(port, () => console.log('server listening on port', port));
