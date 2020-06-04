const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PintoresSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'necestiamos el nombre ']
    },

    corriente: {
        type: String,
        required: [true, 'Necestitamos la corriente']
    },

    nacionalidad: {
        type: String        
    },

    pintura: {
        type: String
        
    }
});

module.exports = mongoose.model('Pintores', PintoresSchema);