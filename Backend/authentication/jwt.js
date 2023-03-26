const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/* const HTTPSTATUSCODE = require("../../utils/httpStatusCode"); */


const register = async (req, res, next) => {
  try {
    const newUser = new User();
    newUser.name = req.body.name;
    newUser.surname = req.body.surname;
    newUser.address = req.body.adress;
    newUser.fechaNacimiento = new Date(req.body.fechaNacimiento),
   /*  newUser.imagen = req.body.imagen; */
    newUser.email = req.body.email;
    const pwdHash = await bcrypt.hash(req.body.password, 10);
    newUser.password = pwdHash;
  
    const userDb = await newUser.save();
    
    return res.json({
      status: 201,
      message: 'Usuario registrado',
      data: userDb
    });
  } catch (err) {
    return next(err);
  }
}

const login = async (req, res, next) => {
  try {
    //Buscamos al user en bd
    const userInfo = await User.findOne({ email: req.body.email })
    //Comparamos la contraseña
    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
      //eliminamos la contraseña del usuario
      userInfo.password = null
      //creamos el token con el id y el name del user
      const token = jwt.sign(
        {
          id: userInfo._id,
          email: userInfo.email
        },
        req.app.get("secretKey"),
        { expiresIn: "1h" }
      );
      //devolvemos el usuario y el token.
      return res.json({
        status: 200,
        message: 'Login con éxito',
        data: { 
          id: userInfo._id, 
          name: userInfo.name,
          surname: userInfo.surname,
          address: userInfo.address,
          fechaNacimiento: userInfo.fechaNacimiento,
         /*  imagen: userInfo.imagen, */
          token: token },
      });
    } else {
      return res.json({ status: 400, message: 'Bad request', data: null });
    }
  } catch (err) {
    return next(err);
  }
}
//funcion logout, iguala el token a null.
const logout = (req, res, next) => {
  try {
    return res.json({
      status: 200,
      message: 'Logout ok',
      token: null
    });
  } catch (err) {
    return next(err)
  }
}

module.exports = {
  register,
  login,
  logout
}