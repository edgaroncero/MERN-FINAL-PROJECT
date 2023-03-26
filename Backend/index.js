require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


//authentication
require("jsonwebtoken");
/* const session = require('express-session'); */
/* const passport = require('passport'); */
/* require('./authentication/passaport'); */


//Utils
const {connect} = require('./utils/db');
const logError = require('./utils/log');

//Routes
const eventRoutes = require('./routes/event.routes');
const userRouter = require('./routes/user.routes');

//Configuración del servidor
connect();
const PORT = 3000;
const server = express();

// Middlewares

    // CONVERTIR A JSON LA REQ
    server.use(express.json());
    server.use(express.urlencoded({extended: true}));
    server.use((req, res, next) => {
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
      });

/*       serv.set("secretKey", "nodeRestApi");  */

    // Acceso público a las imágenes de PUBLIC
    //server.use(express.static(path.join(__dirname, 'public')));

    // Enrutado
    server.use('/events', eventRoutes);
    server.use('/users', userRouter);

    /* server.use(
     session({
        secret: process.env.SESSION_SECRET || 'proyecto_node', // ¡Este secreto tendremos que cambiarlo en producción!
        resave: false, // Solo guardará la sesión si hay cambios en ella.
        saveUninitialized: false, // Lo usaremos como false debido a que gestionamos nuestra sesión con Passport
        cookie: {
            maxAge: 3600000 // Milisegundos de duración de nuestra cookie, en este caso será una hora.
        },
        })
    );
 */
    /* server.use(passport.initialize());
      server.use(passport.session());  */
    
    server.get('/', (req, res) => {
        res.send('Trabajo final em grupo!');
    });


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