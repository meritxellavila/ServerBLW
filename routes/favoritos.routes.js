const express = require("express");
const router = express.Router();
const Favoritos = require("../models/favorito.model");
const Receta=require("../models/Receta.model")

//POST=>Agregar una receta a favoritos relacionada con un usuario
router.post("/", async (req, res, next) => {
  console.log(req.body);

  const { isFavorite, recetaId } = req.body;

try {
    const response = await Favoritos.create({
        isFavorite
    });
    res.sendStatus(201).json({message: "receta añadida a favoritos", response});
} catch (error) {
    next(error);
    
}
});
module.exports = router;
