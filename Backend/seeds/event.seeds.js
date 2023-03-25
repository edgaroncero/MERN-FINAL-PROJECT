const mongoose = require('mongoose');

const Event = require('../models/Event');

const { DB_URL } = require('../utils/db');

const events = [
        {
            title: "Cirque du Soleil",
            category: "Socio Cultural",
            location: "Wizink Center",
            lat: 40.43566138304336, 
            long: -3.6706989926280778,
            city: "Madrid",
            province: "Madrid",
            dtstart: "2022-09-21",
            dtend: "2023-06-28",
            price: 15,
            info: "Cirque du Soleil - Alegría, en Madrid​. Un clásico renovado bajo una nueva luz. Este 2023, Cirque du Soleil celebra sus 25 años en España en los que ha presentado 17 shows, visitado 22 ciudades y ha conquistado con sus espectáculos a 9 millones y medio de espectadores. Y para festejar su 25.º aniversario, la compañía canadiense trae a nuestro país una versión renovada de su producción más icónica, Alegría. Estrenada por primera vez en 1994, Alegría se ha convertido en uno de los espectáculos más queridos de Cirque du Soleil, y a día de hoy ha cautivado a más de 14 millones de espectadores en 255 ciudades de 40 países en más de 19 años de gira. Su banda sonora nominada al Grammy, que incluía la icónica canción homónima, sigue siendo el álbum de Cirque du Soleil más vendido y reproducido hasta la fecha. Revitalizada por un elenco de 53 acróbatas, payasos, músicos y cantantes, Alegría permanece atemporal y está a la altura de su reputación mundial como el espectáculo por excelencia de Cirque du Soleil.",
            link: "https://www.youtube.com/watch?v=snZ1yDnVhfU",
            artist: null,
            img: "https://www.limusinas-madrid.com/wp-content/uploads/Totem-le-nuevo-espect%C3%A1culo-de-Circo-del-Sol-en-Madrid.jpg"
        
        },
        {
            title: "Cirque du Soleil",
            category: "Socio Cultural",
            location: "Wizink Center",
            lat: 40.43566138304336, 
            long: -3.6706989926280778,
            city: "Madrid",
            province: "Madrid",
            dtstart: "2022-09-21",
            dtend: "2023-06-28",
            price: 15,
            info: "Cirque du Soleil - Alegría, en Madrid​. Un clásico renovado bajo una nueva luz. Este 2023, Cirque du Soleil celebra sus 25 años en España en los que ha presentado 17 shows, visitado 22 ciudades y ha conquistado con sus espectáculos a 9 millones y medio de espectadores. Y para festejar su 25.º aniversario, la compañía canadiense trae a nuestro país una versión renovada de su producción más icónica, Alegría. Estrenada por primera vez en 1994, Alegría se ha convertido en uno de los espectáculos más queridos de Cirque du Soleil, y a día de hoy ha cautivado a más de 14 millones de espectadores en 255 ciudades de 40 países en más de 19 años de gira. Su banda sonora nominada al Grammy, que incluía la icónica canción homónima, sigue siendo el álbum de Cirque du Soleil más vendido y reproducido hasta la fecha. Revitalizada por un elenco de 53 acróbatas, payasos, músicos y cantantes, Alegría permanece atemporal y está a la altura de su reputación mundial como el espectáculo por excelencia de Cirque du Soleil.",
            link: "https://www.youtube.com/watch?v=snZ1yDnVhfU",
            artist: null,
            img: "https://www.limusinas-madrid.com/wp-content/uploads/Totem-le-nuevo-espect%C3%A1culo-de-Circo-del-Sol-en-Madrid.jpg"
            
            },
];

const eventDocuments = events.map(event => new Event(event));

mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
      const allEvents = await Event.find();
          if (allEvents.length) {
            await Event.collection.drop();
          }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
          await Event.insertMany(eventDocuments);
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());