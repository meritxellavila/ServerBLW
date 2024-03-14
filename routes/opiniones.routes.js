// const express = require("express");
// const router = express.Router();

// const Opiniones = require ("../models/Opiniones.model")
// const Receta = require ("../models/Receta.model")
// const Usuario = require ("../models/Usuario.model")

// //POST "/api/opiniones => ruta para crera opinion"
// router.post("/opiniones", async (req, res) =>{
//     try {
//         const { usuarioId, recetaId, comentario, valoracion } = req.body;

//         const usuario = await Usuario.findById(usuarioId);
//         const receta = await Receta.findById(recetaId);
//         if (!usuario || !receta) {
//             return res.status(404).json({ message: "Usuario associado a receta no encontrado" });
//         }

//         const opinion = await Opiniones.create({ usuario: usuarioId, receta: recetaId, comentario, valoracion });
//         res.status(201).json(opinion);
//     } catch (error) {
//         res.status(400).json({message: error. message});
        
//     }
// })
// module.exports = router;