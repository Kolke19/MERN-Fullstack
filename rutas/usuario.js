//Definiendo modelo ya teniendo instalado express
const express = require ('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema


//MODELO
const eschemaUsuario = new eschema ({
    //CAMPOS
    nombre:"string",
    email:"string",
    telefono:"string"
})

const ModeloUsuario = mongoose.model('usuarios', eschemaUsuario)
module.exports = router

// router.get("/ejemplo", (req, res) => {
//     res.end("saludo carga desde ruta ejemplo")
// })

//AGREGAR USUARIOS

router.post('/agregarusuario', (req, res) => {
    const nuevousario = new ModeloUsuario ({
        nombre:req.body.nombre,
        email:req.body.email,
        telefono:req.body.telefono,
        // idusuario:req.body.idusuario
    })
    nuevousario.save(function (err){
        if(!err) {
            res.send('el usuario ha sido agregado correctamente')
        } else {
            res.send(err)
        }
    })
})

// OBTENER TODOS LOS USUARIOS

router.get('/obtenerusuarios', (req, res) => {
    ModeloUsuario.find({}, function (docs, err) {
          if(!err) {
            res.send(docs)
            console.log(docs);
        } else {
            res.send(err)
        }
    })
})