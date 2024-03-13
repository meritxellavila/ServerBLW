const { Schema, model } = require("mongoose");

const recetaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        default: "https://www.instintodenido.com/wp-content/uploads/blw-mixto.jpg" 
    },
    pasos: {
        type: [String],
        required: true
    },
    ingredientes: {
        type: [String],
        required: true
    },
    creadoPor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    opiniones: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Opinion'
    }]
});



const Recetas = model("Recetas", recetaSchema);

module.exports = Recetas;