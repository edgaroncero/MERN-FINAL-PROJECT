// Modelo USER
const User = require('../models/User');
//Hasseado de password
const bcrypt = require('bcrypt');
//Estrategia de auth
const jwt = require('jsonwebtoken');


const register = async (req, res, next) => {
    try {
        const email = await User.findOne({ email: req.body.email});
        const username = await User.findOne({ username: req.body.username});
        const password = req.body.password;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (email) {
            return res.json({
                status: 400,
                message: 'This email already exist',
                data: null
            })
        } else if (username) {
            return res.json({
                status: 400,
                message: 'This username already exist',
                data: null
            })
        } if (!passwordRegex.test(password)) {
            return res.status(400).send('La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número');
          }
        const newUser = new User();       
        const pwdHash = await bcrypt.hash(req.body.password, 10);
        if (req.file) {
            const cloudinaryURL = req.file.path ? req.file.path : null;
            newUser.img = cloudinaryURL;
        }  
        newUser.username = req.body.username;      
        newUser.name = req.body.name;
        newUser.lastname = req.body.lastname;
        newUser.city = req.body.city;
        newUser.birth = req.body.birth;
        newUser.email = req.body.email;
        newUser.password = pwdHash;
        newUser.isAdmin = req.body.isAdmin;
        newUser.events = [];

        const userDb = await newUser.save();

        return res.json({
            status: 201,
            message: 'New User created',
            data: userDb
        });
    } catch (error) {
        return next(error);
    }
};
const login = async (req, res, next) => {
    try {
        const userInfo = await User.findOne({ email: req.body.email});
        if (!userInfo) {
            return res.json({
                status: 400,
                message: 'No User found by this email',
                data: null
            })
        } else if(userInfo.email && bcrypt.compareSync(req.body.password, userInfo.password)) {
            userInfo.password = null;
            const token = jwt.sign(
            {
                id: userInfo._id,
                email: userInfo.email,
            },
            req.app.get('secretKey'),
            { expiresIn: '1h'}
            );

            return res.json({
                status: 200,
                message: 'You ve been logged',
                data: { user: userInfo, token: token}
            });
        } else {
            return res.json( { status: 400, message: 'Password incorrect', data: null});
        }
    } catch (error) {
        return next(error);
    }
};

// Securizado de la ruta: /addevent
const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if(!authorization) {
        return res.json({
            status: 401,
            message: 'Unauthorized',
            data: null
        })
    }
    const splits = authorization.split(' ');
    if( splits.length != 2 || splits[0] !="Bearer") {
        return res.json({
            status: 400,
            message: 'Bad request',
            data: null
        })
    }
    const jwtString = splits[1];
    try {
        var token = jwt.verify(jwtString, req.app.get('secretKey'));
    } catch(error) {
        next(error)
    }
    const authority = {
        id: token.id,
        email: token.email
    }

    req.authority = authority;
    next();
}

const addEvent = async(req, res, next) => {
    try {
        const { userId, eventId } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $push: { events: eventId }},
        { new: true}
        );
        return res.status(200).json(updatedUser);
    } catch(error) {
        next(error);
    } 
};

// Añadir eventos (sólo isAdmin)
const editUser = async (req, res, next) => {
    try {
      const userId = req.params.id;
      const userEdited = await User.findById(userId);
  
      if (userEdited) {
        if (req.body.username) userEdited.name = req.body.username;
        if (req.body.name) userEdited.name = req.body.name;
        if (req.body.lastname) userEdited.lastname = req.body.lastname;
        if (req.body.city) userEdited.city = req.body.city;
        if (req.body.birth) userEdited.birth = req.body.birth;
        if (req.body.password) userEdited.password = req.body.password;
        if (req.file && req.file.path) userEdited.img = req.file.path;
        if (req.body.events) userEdited.events = [];
  
        const userModified = await userEdited.save();
  
        return res.json({
          status: 200,
          message: 'User changed',
          data: { user: userModified },
        });
      } else {
        return res.json({
          status: 401,
          message: 'No User found by this Id',
          data: null,
        });
      }
    } catch (error) {
      next(error);
    }
  };

const removeEvent = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, {
            $pull: { events: req.params.eventId }
          }, { new: true });

        if(!user){
            return res.status(404).json({ mensaje: 'User not found' });
        }
        res.json({ mensaje: 'Event removed from user' });
        } catch (error) {
            next(error);
        }
};


const logout = (req, res, next) => {
    try {
        return res.json({
            status: 200,
            message: 'Logout OK',
            token: null
        });       
    } catch(error) {
        return next(error)
    }
};


module.exports = {
    register,
    login,
    logout,
    isAuth,
    addEvent,
    editUser,
    removeEvent, 
    
}
