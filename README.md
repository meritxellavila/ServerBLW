# Project Name

## [See the App!](https://sindientesblw.netlify.app/)

![App Logo](your-image-logo-path-or-name)

## DESCRIPCION

Este proyecto presenta una colección de recetas adaptadas para Baby Led Weaning (BLW), incentivando la independencia y exploración alimentaria en bebés. Proporcionamos orientación práctica para que los padres faciliten una transición suave hacia la alimentación sólida, promoviendo así un desarrollo saludable en sus pequeños.


#### [Repositorio del cliente aquí](https://github.com/meritxellavila/BLWCliente)
#### [Repositorio del servidor aquí]](https://github.com/meritxellavila/ServerBLW)

## Funcionalidades pendientes

**NOTE -** Agregar favoritos, separar por categorias segun los meses del bebe.


# Tecnologías utilizadas

-Tecnologias utilizadas HTML, CSS, Javascript, React, axios, React Context,Bootstrap, node, express, mongoDB,Postman, mongoDB Compass etc.


# Server Structure

## Models

User model

```javascript
 email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "name is required."],
     },
     recetas: { type: mongoose.Schema.Types.ObjectId, ref: 'Receta' },
  },
  {
    timestamps: true,
  }
```

Receta model

```javascript
 nombre: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        // type: mongoose.Schema.Types.Mixed, 
    },
```

Opiniones model

```javascript
 usuarioId: {
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
    
    recetaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Receta',
        required: true
    }
 
```


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                    |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | -------------------------------------------------------------- |
| POST        | `/auth/signup`              | {name, email, password}      | 201            | 400          | Registra al usuario en la Base de Datos                           |

| POST        | `/auth/login`               | {username, password}         | 200            | 400          | Valida credenciales, crea y envía Token|

| GET         | `/auth/verify`              |                              | 200            | 401          | Verifica el token del usuario                                        |

| GET         | `/auth/perfil`              |       {loggedId}                       | 200            | 401          | Verifica el token del usuario y muestra su perfil por su Id de usuario                                       |


| PUT        | `/auth/:usurioId`              |       {usuarioId}                       | 200            | 401          |  Permite modificar los datos del usuario                                  |




| POST        | `/recetas` |{ nombre,imagen,pasos,ingredientes,creadoPor,Opiniones,}    | 200          | 400      |      Crear un nuevo documento de receta              |




| GET       | `/recetas`                     |                     | 200           | 400          | Listar todas las recetas                                |



| GET         | `/recetas/porUsuario/:usuarioId`|          {usuarioId}                    | 200            | 500   | Lista toda las recetas de un usuario en concreto.                                      |



| PUT         | `/recetas/porReceta/:recetasId            |         {recetasId}         | 200         | 400, 401     | Editar recetas                                            |


| DELETE      | `/recetas//:recetasId`             |             {recetasId}        | 200            | 401          | Eliminar receta                                         |


| POST         | `/opiniones`             |    {usuarioId,comentario,valoracion,recetaId,}       | 200     | 401     | Agrega opiniones a una receta  de un usuario                                   |


| GET        | `/opiniones/recetas/:recetaId/opiniones`                  |         {recetasId}                        | 200            | 400, 401     | Mostrar todas las opiniones de una receta.                                       |
| DELETE      | `/opiniones/:opinionesId`          |            {opinionesId}                  | 200            | 401          | Eliminar una opinion de una receta. 
                                  |
  
## Links

### Desarrolladora

[Desarrolladora Meri](https://github.com/meritxellavila)

### Proyecto

[Link Repositorio  Cliente](https://github.com/meritxellavila/BLWCliente)

[Link Repositorio Servidor](https://github.com/meritxellavila/ServerBLW)

[Link Despliegue](https://sindientesblw.netlify.app/)

### Excalidraw

[Link para excalidraw](https://excalidraw.com/#json=XpwsBgkx4CfmtTI6AHuwU,BYpUT6Yha0PCzm9U8tclZA)


### Prezi

[Prezi Link](https://prezi.com/p/edit/kvkjjnqgqeyh/)