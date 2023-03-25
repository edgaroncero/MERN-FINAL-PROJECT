/* 
const mongoose = require('mongoose');

// Imporatmos el modelo en este nuevo archivo.
const ListadoUser = require('../models/ListadoUser');

const { DB_URL } = require('../utils/db');

const UserList = [
    {
        name: 'Ruth',
        apellidos: 'Sanchez',
        ubicacion:'Madrid',
        fechaNacimiento: '050295',
        email: 'ruthsanchez@yahoo.com',
       /*  imagen:
        picture:
        paswword: '123',    
    },

    {
        name: 'Lucas',
        apellido: 'Abuquerque',
        ubicacion:'Salamanca',
        fechaNacimiento: '250281',
        email: 'lucas2824@hotmail.com',
        paswword: '456',
         /*  imagen:
        picture:
        paswword: '123',   
    },
    
  ];
  
  const researchUser =  UserList.map(item => new ListadoUser(item));
  
  // nueva coneccion a base de datos
  // pero nos desconectaremos tras insertar los documentos
  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
          // Utilizando allResearchUser.find() obtendremos un array con todos los usuarios de la db
      const allResearchUser = await ListadoUser.find();
          
          //dropearemos la colección
      if (allResearchUser.length) {
        await ListadoUser.collection.drop(); //La función drop borra la colección
      }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
          // Una vez vaciada la db de los persquisadores, usaremos el array
          // para llenar nuestra base de datos con todas los pesquisadores.
          await ListadoUser.insertMany(researchUser);
      })
    .catch((err) => console.log(`Error creating data: ${err}`))
      // Por último nos desconectaremos de la DB.
    .finally(() => mongoose.disconnect()); */