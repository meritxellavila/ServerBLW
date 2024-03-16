const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const favoritosSchema = new mongoose.Schema({
  isFavorite: Boolean,
  recetasId: { type: mongoose.Schema.Types.ObjectId, ref: 'Recetas' },
});

const Favoritos = mongoose.model('Favoritos', favoritosSchema);

module.exports = Favoritos;
