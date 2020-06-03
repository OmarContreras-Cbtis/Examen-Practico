const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const PUERTO = process.env.PORT || 3000;

let productosRouter = require('./routes/producto')

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.use('/', productosRouter);

mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://Thanos:RosaPuta@equipo-12-aiizn.mongodb.net/TiendaPanini?retryWrites=true&w=majority'
mongoose.connect(cadena,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('conexion establecida')
})
.catch(err=> console.log(err));

app.listen(PUERTO, ()=>{
    console.log('escuchando el puerto');
});