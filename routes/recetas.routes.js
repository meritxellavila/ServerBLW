const express = require("express");
const router = express.Router();

const Recetas = require("../models/Receta.model");

//POST "/api/receta => ruta para crera receta"
router.post("/", async (req, res, next) => {
  console.log(req.body);

  const { nombre,
    imagen,
    pasos,
    ingredientes,
    creadoPor,
    Opiniones,
    FavoritosBy,} = req.body;

  try {
    await Recetas.create({
      nombre,
      imagen,
      pasos,
      ingredientes,
      creadoPor,
      Opiniones,
      FavoritosBy,
    });

    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});


module.exports = router;