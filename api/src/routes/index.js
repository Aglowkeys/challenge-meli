const express = require('express');
const router = express.Router();

// Importamos todas las rutas:
const itemsRouter = require('./items');

router.use('/api/items', itemsRouter);

module.exports = router;
