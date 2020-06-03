let moongoose = require('mongoose');

let Productos = require('../models/Productos');

let productosController = {};

productosController.list = (re, res)=>{
    Productos.find({})
    .limit(20)
    .skip(0)
    .exec((err, producto)=>{
        
        if(err){
            console.log('Error: ', err)
        }
        res.render('../views/index', {
            productos: producto,
            titulo: "listado de productos",
            year: new Date().getDate()
        })
    })
};

module.exports = pintoresController;