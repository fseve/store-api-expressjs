const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('¡Hola mundo de Express!');
});

app.listen(5000, function() {
    console.log('Servidor web Express en ejecución');
});



