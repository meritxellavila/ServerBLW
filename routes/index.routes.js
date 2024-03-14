const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});


// control de todas nuestros archivos de rutas

const authRoutes = require("./auth.routes")
router.use("/auth", authRouter)


//RECETAS
const recetasRoutes = require("./recetas.routes")
router.use("/recetas", recetasRoutes)

//OPINIONES
const opinionesRoutes = require ("./opiniones.routes")
router.use("/opiniones", opinionesRoutes )

//USUARIOS
const usuariosRoutes = require ("./usuarios.routes")
router.use("/usuarios", usuariosRoutes )



module.exports = router;