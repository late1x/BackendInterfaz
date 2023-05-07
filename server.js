const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let datos = {};


app.post('/api/datos', (req, res) => {
    const { Humedad, Temperatura, Litros, LitrosPorHora, Indice } = req.body;
    datos = { Humedad, Temperatura, Litros, LitrosPorHora, Indice};
    console.log(datos);
    res.sendStatus(200);
});

// Manejar las solicitudes GET para devolver los datos
app.get('/api/datos', (req, res) => {
    res.send(datos);
});


app.listen(4000, () => {
    console.log('API escuchando en el puerto 4000');
});

