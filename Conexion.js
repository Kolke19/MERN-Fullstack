const mongoose = require ('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objetobd = mongoose.connection

objetobd.on('connected', () =>{
    console.log('la conexion es correcta o funciona')
})

objetobd.on('error', () => {
    console.log('el servidor no esta funcionando')
    
})

module.exports = mongoose// necesito exportarlo
//NPM RUN START, leer propiedades de package.json