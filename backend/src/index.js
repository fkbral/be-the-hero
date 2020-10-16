const express = require('express');
const cors = require('cors');

require('./database/connection')

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Server started on http://localhost:3333'));
