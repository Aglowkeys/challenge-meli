const express = require('express');
const api = express();
const routes = require('./routes/index');

api.use(routes);

api.listen(3001, () => {
    console.log('Servidor escuchando en puerto 3001');
});
