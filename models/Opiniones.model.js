const { Schema, model } = require("mongoose");

const opinionSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    comentario: {
        type: String,
        required: true
    },
    valoracion: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    imagen: {
        type: String,
        default: "https://www.instintodenido.com/wp-content/uploads/blw-mixto.jpg" 
    },
    receta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Receta'
    }
});

const Opiniones = model("Opiniones", opinionSchema);

module.exports = Opiniones;