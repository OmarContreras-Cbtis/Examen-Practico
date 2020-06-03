const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ProductosSchema = new Schema({
    name: {
        type: String,
        required: [true, 'necestiamos el nombre del producto']
    },

    ProductType: {
        type: String,
        required: [true, 'Necestitamos el tipo de producto']
    },

    price: {
        type: Number,
        required: [true, 'Necesitamos el presio']
    },

    AxCode: {
        type: String,
        required: [true, 'necesitamos el codigo AX']
    }
});

module.exports = mongoose.model('Productos', ProductosSchema);