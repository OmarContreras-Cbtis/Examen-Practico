const express = require('express');

let producto = require('../controllers/ProductosController.js');

let router = express.Router();

router.get('/', producto.list);

module.exports = router;