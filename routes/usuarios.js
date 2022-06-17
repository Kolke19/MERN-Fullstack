
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
    telefono:"string",
    idusuario:"string"
})

const ModeloUsuario = mongoose.model('usuarios', eschemaUsuario)
module.exports = router

//Request --> peticion, Res --> response, Mapeo, de prueba
// router.get("/ejemplo", (req, res) => {
//     res.end("saludo carga desde ruta ejemplo")
// })

router.post('/agregar/agregarusuario', (req, res => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre
    })
}))