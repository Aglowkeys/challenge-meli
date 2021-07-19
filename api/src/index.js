const express = require('express');
const api = express();
const cors = require('cors');
const routes = require('./routes/index');

api.use(cors());
api.use(routes);

api.listen(3001, () => {
    console.log('Servidor escuchando en puerto 3001');
});
