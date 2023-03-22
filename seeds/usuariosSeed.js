// Archivo research.seed.js

const mongoose = require('mongoose');

// Imporatmos el modelo en este nuevo archivo.
const User = require('../models/User');

//const { DB_URL } = require('../utils/db');

const researchList = [
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
  
  const researchDocuments =  researchList.map(item => new Research(item));
  
  // nueva coneccion a base de datos
  // pero nos desconectaremos tras insertar los documentos
  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
          // Utilizando Research.find() obtendremos un array con todos los pesquisadores de la db
      const allResearch = await Research.find();
          
          //dropearemos la colección
      if (allResearch.length) {
        await Research.collection.drop(); //La función drop borra la colección
      }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
          // Una vez vaciada la db de los persquisadores, usaremos el array reserachDocuments
          // para llenar nuestra base de datos con todas los pesquisadores.
          await Research.insertMany(researchDocuments);
      })
    .catch((err) => console.log(`Error creating data: ${err}`))
      // Por último nos desconectaremos de la DB.
    .finally(() => mongoose.disconnect());