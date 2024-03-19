const express = require("express");
const router = express.Router();
const Opiniones = require("../models/Opiniones.model");
const Receta = require("../models/Receta.model");
const Usuario = require("../models/Usuario.model");

//POST "/api/opiniones/opiniones => ruta para crera opiniones"
router.post("/", async (req, res, next) => {
    console.log(req.body);
    const  {
      usuarioId,
      comentario,
      valoracion,
      recetaId,
    } = req.body;
  try {
    
    const response = await Opiniones.create({
        usuarioId,
        comentario,
        valoracion,
        recetaId,
      });
   
    res.status(201).json({ message: "opinion creada!", response });
    next()
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

///GET "/api/opiniones/opiniones =>ruta para obtener todas las opiniones
router.get("/recetas/:recetaId/opiniones", async (req, res) => {
  try {
    const opiniones = await Opiniones.find({ recetaId: req.params.recetaId });
    res.json(opiniones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
