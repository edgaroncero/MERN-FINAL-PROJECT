const express = require('express');
const passport = require('passport');



//router
const router = express.Router();

router.post('/register', (req, res, next) => {
    // Invocamos a la autenticación de Passport

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
    