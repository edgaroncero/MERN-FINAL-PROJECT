require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// Auth
require('jsonwebtoken');

//Utils
const {connect} = require('./utils/db');
const logError = require('./utils/log');

//Routes
const eventRoutes = require('./routes/event.routes');
const userRoutes = require('./routes/user.routes');


//Configuración del servidor
connect();
const PORT = process.env.PORT || 3000;
const server = express();

// Middlewares

    // CONVERTIR A JSON LA REQ

    server.use(express.json());
    server.use(express.urlencoded({extended: true}));
    // Acceso público a las imágenes de PUBLIC
    //server.use(express.static(path.join(__dirname, 'public')));
    //CABECERAS DE AUTH
    server.use(cors());
    server.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    server.set('secretKey', 'nodeRestApi');

    // Enrutado
    server.use('/events', eventRoutes);
    server.use('/users', userRoutes);


    // Control de errores
    server.use('*', (req, res, next) => {
        const msg = 'Route not found';
        const error = new Error('Route not found)');
        error.status = 404;
        next(error);
        const log = `${msg} ${req.path} ${new Date().toISOString()}\n`;
        logError(log);
        res.status(404).send(msg);
    });

    server.use((error, req, res, next) => {
        return res.status(error.status || 500).json(error.message || 'Unexpected error');
      });
      


server.listen(PORT, () =>{
    console.log(`Server runing in http://localhost:${PORT}`)
});