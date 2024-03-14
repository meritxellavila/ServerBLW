const express = require("express");
const router = express.Router();

const Recetas = require("../models/Receta.model");
const Usuarios = require("../models/Usuario.model")
const Opiniones = require ("../models/Opiniones.model")

// //POST "/api/recetas => ruta para crera receta"
router.post("/", async (req, res, next) => {
  console.log(req.body);

  const { 
    nombre,
    imagen,
    pasos,
    ingredientes,
    creadoPor,
    Opiniones,
    FavoritosBy,
  } = req.body;

  try {
    const response = await Recetas.create({
      nombre,
      imagen,
      pasos,
      ingredientes,
      creadoPor,
      Opiniones,
      FavoritosBy,
    });

    res.sendStatus(201).json({ message: "receta creada!", response });
  } catch (error) {
    next(error);
  }
});


//GET "/api/recetas =>ruta para obtener todas las recetas
router.get("/", (req, res, next) => {
  Recetas.find({})
.populate("creadoPor")
    .then((recetas) => {
      console.log("Receta recuperada ->", recetas);
      res.status(200).json(recetas);
    })
    .catch((error) => {
      next(error)
    });
});

//GET "/api/recetas/recetasId" => obtener una receta especifico por id
router.get("/:recetasId", async (req, res, next) => {
  try {
    const response = await Recetas.findById(req.params.recetasId)
    // console.log(response);
    
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

//   //PUT "api/recetas/recetaId => actualiza/ modificar  receta por id
//   router.put("/:recetaId", async (req, res, next) => {
//     const { nombre,
//       imagen,
//       pasos,
//       ingredientes,
//       creadoPor,
//       Opiniones,
//       FavoritosBy,
//     } = req.body;
  
  
//     try {
//       const response = await Receta.findByIdAndUpdate(
//         req.params.recetaId,
//         {
//           nombre,
//           imagen,
//           pasos,
//           ingredientes,
//           creadoPor,
//           Opiniones,
//           FavoritosBy,
//         },
//         { new: true }
//       );
//       res.status(202).json(response);
//     } catch (error) {
//       next(error);
//     }
//   });

//   // DELETE "/api/recetas/recetasId =>elimina una receta por id
//   // router.delete("/:recetaId", async (req, res, next) => {
//   //   try {
//   //     await Recetas.findByIdAndDelete(req.params.revetaId);
//   //     res.status(202).json({ message: "receta borrada" });
//   //   } catch (error) {
//   //     next(error);
//   //   }
//   // });


module.exports = router;

// let variable = "patata"

// let enMayuscula = variable.toUpperCase ()