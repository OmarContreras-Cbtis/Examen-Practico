const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const PUERTO = process.env.PORT || 3000;

let productosRouter = require('./routes/producto')

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartial(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.use('/', pintoresRouter);

moongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://Thanos:RosaPuta@equipo-12-aiizn.mongodb.net/TiendaPanini?retryWrites=true&w=majority'