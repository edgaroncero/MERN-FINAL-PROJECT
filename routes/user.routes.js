const express = require('express');
const router = express.Router();

// Funciones de archivo JWT
const { register, login, addEvent, editUser, logout, isAuth, removeEvent } = require('../auth/jwt');
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
router.post('/register', [fileMiddleware.parser.single('img')], register);
router.post('/login', login);
router.post('/logout', logout);
router.put('/', [isAuth], addEvent);
router.put('/:id',[fileMiddleware.parser.single('img')] ,editUser);
router.delete('/:userId/events/:eventId', removeEvent);


module.exports = router;