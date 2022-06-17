const express = require('express')
const app = express()
//conexion con mongo db

const dbArchive = require('./conexion')

//importacion del archivo de rutas y modelo de usuario

const rutaUsuario = require("./routes/usuarios")

app.use("./api/usuario", rutaUsuario)

app.get('/', (req, res) => {
    res.end('el usuario esta corriendo correctamente desde node.js')
})

//configurar server basico 

app.listen(5000, function () {
    console.log('el servidor esta corriendo correctamente')
})