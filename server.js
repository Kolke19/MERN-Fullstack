const express = require('express')
const app = express()
//conexion con mongo db

const dbArchive = require('./conexion')

//importacion del archivo de rutas y modelo de usuario

const rutasuario = require('./rutas/usuario')

//Importar body Parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))
//
app.use("/api/usuario", rutasuario)

app.get('/', (req, res) => {
    res.end('el usuario esta corriendo correctamente desde node.js')
})

//configurar server basico 

app.listen(4000, function () {
    console.log('el servidor esta corriendo JAVI PUTO ')
})