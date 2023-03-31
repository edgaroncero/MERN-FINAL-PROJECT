const express = require('express');
const router = express.Router();

// Funciones de archivo JWT
const { register, login, addEvent, editUser, logout, isAuth, removeEvent, validarPassword } = require('../auth/jwt');
// Subida de imágenes
const fileMiddleware = require('../middlewares/file.middleware');


// Modelo User
const User = require('../models/User');

// Listado de usuarios con y sin populate
router.get('/', async (req, res, next) => {
    const { viewAll } = req.query;
    try {
        let users = [];
        if (viewAll === 'true') {
            users = await User.find().populate('events')
        } else {
            users = await User.find();
        }
        return res.status(200).json(users);
    } catch(error) {
        return next(error);
    }
});

//Eventos del usuario
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {   

        const user = await User.findById(id).populate('events')
        return res.status(200).json(user.events);
    } catch (error) {
        return next(error);
    }
});


//Registro
router.post('/register', [fileMiddleware.parser.single('img')], register);
//Login
router.post('/login', login);
//LogOut
router.post('/logout', logout);
// Añadir evento a un user
router.put('/', [isAuth], addEvent);
// Editar user
router.put('/:id',[fileMiddleware.parser.single('img')] ,editUser);
// Borrar un evento de un user
router.delete('/:userId/events/:eventId', removeEvent);


module.exports = router;