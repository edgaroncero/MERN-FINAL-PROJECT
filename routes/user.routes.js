const express = require('express');
connect = require('mongoose');
const passport = require('passport');
const User = require('../models/User');

const router = express.Router();

 router.get('/', async (req, res, next) => {
	try {
		const users = await User.find();;
// 	console.log(req.user);
		return res.status(200).json(users)
	} catch (error) {
		return next(error)
	}
});
 
router.post('/register', (req, res, next) => {
  
    const done = (error, user) => {
        if (error) {
          return next(error);
        }
    
        user.password = null;
    
        req.logIn(user, (error) => {
            // Si hay un error logeando al usuario, resolvemos el controlador
            if (error) {
                return next(error);
            }
            // Si no hay error, devolvemos al usuario logueado
            return res.status(201).json(user);
        });
      };
    
      const register = passport.authenticate('register', done);
      register(req); // ¡No te olvides de invocarlo aquí!
  });
  router.post('/login', (req, res, next) => {

    const done = (error, user) => {
      if (error) {
        return next(error);
      }
  
      user.password = null;
  
      req.logIn(user, (error) => {
          // Si hay un error logeando al usuario, resolvemos el controlador
          if (error) {
              return next(error);
          }
          // Si no hay error, devolvemos al usuario logueado
          return res.status(200).json(user);
      });
    };
    
    const login = passport.authenticate('login', done);
    login(req);
  });
  
  
    router.post('/logout', (req, res, next) => {
      req.logout((err) => {
        if (err) {
          return next(err);
        }
        return res.status(200).send();
      });
    });
    
    module.exports = router;