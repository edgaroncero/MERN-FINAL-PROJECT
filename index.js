const express = require('express');
const path = require('path');
require('dotenv').config();

//authentication
const session = require('express-session');
const passport = require('passport');
require('./authentication/passaport');


//utils
const { connect } = require('./utils/db');
const logError = require('./utils/log');


//routes
const listadoroutes = require('./routes/user.listadoroutes');
const userRouter = require('./routes/user.routes');


//función conecta con MongoDB
connect();
const PORT = process.env.PORT || 5000;
const server = express();

//Middlewares
server.use(express.json());
server.use(express.urlencoded({extended: true}));

//routes
server.use('/users', userRouter);
server.use('/listado', listadoroutes);


server.use(
  session({
    secret: process.env.SESSION_SECRET || 'proyecto_node', // ¡Este secreto tendremos que cambiarlo en producción!
    resave: false, // Solo guardará la sesión si hay cambios en ella.
    saveUninitialized: false, // Lo usaremos como false debido a que gestionamos nuestra sesión con Passport
    cookie: {
      maxAge: 3600000 // Milisegundos de duración de nuestra cookie, en este caso será una hora.
    },
  })
);

server.use(passport.initialize());
server.use(passport.session()); 

server.get('/', (req, res) => {
  res.send('Trabajo final em grupo!');
});


// Error control
server.use('*', (req, res, next) => {
  const msg = 'Route not found';
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
  const log = `${msg}
  ${req.path}
  ${new Date().toISOString()}\n`;
  logError(log);
});
server.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || 'Unexpected error');
});


//server
server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});

