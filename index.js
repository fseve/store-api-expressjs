const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Importar rutas
const routes = require('./routes');

const app = express();

// Conexión a la base de datos
mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/store-api',
    {
        useNewUrlParser: true
    }
);

// Habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar CORS
app.use(cors());

app.use('/', routes());

// app.get('/', function (req, res) {
//     res.send('¡Hola mundo de Express JS!');
// });

app.listen(5000, function() {
    console.log('Servidor web Express en ejecución');
});



