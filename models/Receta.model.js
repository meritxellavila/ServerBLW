const mongoose = require("mongoose");
const { Schema, model } = mongoose;

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
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Usuario'
         type: mongoose.Schema.Types.Mixed, required: true  
    },
    
});




const Receta = model("Receta", recetaSchema);

module.exports = Receta;