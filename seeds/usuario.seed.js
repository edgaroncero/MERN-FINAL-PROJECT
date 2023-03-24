
/*const mongoose = require('mongoose');

// Imporatmos el modelo en este nuevo archivo.
const User = require('../models/User');

const { DB_URL } = require('../utils/db');

const UserList = [
    {
        name: 'Ruth',
        apellido: 'Sanchez',
        fechaNacimiento: '050295',
        paswword: '123',
        localización:'Madrid',
        email: 'ruthsanchez@yahoo.com',
    },

    {
        name: 'Lucas',
        apellido: 'Abuquerque',
        fechaNacimiento: '250281',
        paswword: '456',
        localización:'Salamanca',
        email: 'lucas2824@hotmail.com',
        },
    
  ];
  
  const researchUser =  UserList.map(item => new User(item));
  
  // nueva coneccion a base de datos
  // pero nos desconectaremos tras insertar los documentos
  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
          // Utilizando allResearchUser.find() obtendremos un array con todos los usuarios de la db
      const allResearchUser = await User.find();
          
          //dropearemos la colección
      if (allResearchUser.length) {
        await User.collection.drop(); //La función drop borra la colección
      }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
          // Una vez vaciada la db de los persquisadores, usaremos el array
          // para llenar nuestra base de datos con todas los pesquisadores.
          await User.insertMany(researchUser);
      })
    .catch((err) => console.log(`Error creating data: ${err}`))
      // Por último nos desconectaremos de la DB.
    .finally(() => mongoose.disconnect()); */