const express = require("express");
const router = express.Router();
const Opiniones = require("../models/Opiniones.model");
const Receta = require("../models/Receta.model");
const Usuario = require("../models/Usuario.model");

//POST "/api/opiniones/opiniones => ruta para crera opiniones"
router.post("/", async (req, res) => {
    try {
        const { usuarioId, recetaId, comentario, valoracion, imagen } = req.body;

        // Verificar si el usuario y la receta existen
        const usuario = await Usuario.findById(usuarioId);
        const receta = await Receta.findById(recetaId);
        if (!usuario || !receta) {
            return res.status(404).json({ message: "Usuario asociado a receta no encontrado" });
        }

        // Crear la nueva opinión
        const nuevaOpinion = new Opiniones({
            usuario: usuarioId,
            receta: recetaId,
            comentario,
            valoracion,
            imagen
        });

        // Guardar la nueva opinión en la base de datos
        const opinionGuardada = await nuevaOpinion.save({message: "Opinion creada"});

        if (!opinionGuardada) {
            throw new Error("Error al guardar la opinión");
        }
        
        res.status(201).json(opinionGuardada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

///GET "/api/opiniones/opiniones =>ruta para obtener todas las opiniones
router.get("/", async (req, res) => {
    try {
        // todas las opiniones de la base de datos
        const opiniones = await Opiniones.find();

        // opiniones encontradas en la respuesta
        res.json(opiniones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;
