const express = require('express');
const mongoose = require('mongoose');

//Utils
const {connect} = require('./utils/db');
const logError = require('./utils/log');

//Routes
const eventRoutes = require('./routes/event.routes');

//Configuración del servidor
connect();
const PORT = 3000;
const server = express();

// Middlewares

    // CONVERTIR A JSON LA REQ
    server.use(express.json());
    server.use(express.urlencoded({extended: true}));

    // Enrutado
    server.use('/events', eventRoutes);

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


server.listen(PORT, () =>{
    console.log(`Server runing in http://localhost:${PORT}`)
});