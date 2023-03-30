const mongoose = require('mongoose');
const Event = require('../models/Event');
const { DB_URL } = require('../utils/db');

const events = [

        
          {
            title: "Tour Atlético de Madrid",
            category: "Entretenimiento",
            location: "Estadio Metropolitano",
            city: "Madrid",
            province: "Madrid",
            lat: 40.43727180669592,
            long: -3.5991240772581143,
            dtstart: "2023-10-25",
            dtend: "2023-10-25",
            price: 12,
            info: "Descubre Territorio Atleti, la nueva experiencia para revivir la historia rojiblanca, y visita el Cívitas Metropolitano",
            link: "Descubre Territorio Atleti, la nueva experiencia para revivir la historia rojiblanca, y visita el Cívitas Metropolitano",
            img: "https://www.atleticodemadrid.com/system/files/66880/large/L8fvKrSjM1_PRODUCTOS_TA_940_MUSEO_TOUR__FOTOS.jpg?1605542345",
        },
        {
            title: "Cirque du Soleil",
            category: "Socio Cultural",
            city: "Madrid",
            province: "Madrid",
            lat: 40.43566138304336,
            long: -3.6706989926280778,
            dtstart: "2023-10-20",
            dtend: "2024-01-31",
            price: 25,
            info: "Cirque du Soleil - Alegría, en Madrid​. Un clásico renovado bajo una nueva luz. Este 2023, Cirque du Soleil celebra sus 25 años en España en los que ha presentado 17 shows, visitado 22 ciudades y ha conquistado con sus espectáculos a 9 millones y medio de espectadores. Y para festejar su 25.º aniversario, la compañía canadiense trae a nuestro país una versión renovada de su producción más icónica, Alegría. Estrenada por primera vez en 1994, Alegría se ha convertido en uno de los espectáculos más queridos de Cirque du Soleil, y a día de hoy ha cautivado a más de 14 millones de espectadores en 255 ciudades de 40 países en más de 19 años de gira. Su banda sonora nominada al Grammy, que incluía la icónica canción homónima, sigue siendo el álbum de Cirque du Soleil más vendido y reproducido hasta la fecha. Revitalizada por un elenco de 53 acróbatas, payasos, músicos y cantantes, Alegría permanece atemporal y está a la altura de su reputación mundial como el espectáculo por excelencia de Cirque du Soleil.",
            link: "https://www.youtube.com/watch?v=snZ1yDnVhfU",
            img: "https://res.cloudinary.com/dvf3wmaax/image/upload/v1679823841/vqi3meelio2r5gwpkhdl.jpg"
        },
        {
            title: "Semana Grande de Gijón",
            category: "Socio Cultural",
            location: "Playa Poniente",
            city: "Gijón",
            province: "Asturias",
            lat: 43.54249679230641,
            long: -5.672459074392106,
            dtstart: "2022-08-04",
            dtend: "2022-08-15",
            price: 0,
            info: "La “Semanona de Gijón” son unas celebraciones en honor a la patrona Nuestra Señora de Begoña. Durante estos días se celebran grandes conciertos y actividades festivas que se concentran principalmente en Plaza Mayor y la Playa de Poniente.\n\nEl pistoletazo de salida tiene gular con el pregón, quedando inaugurada oficialmente la Semana Grande. Se celebran en la ciudad conciertos gratuitos todos los días con artistas de primer nivel.\n\nEn la noche del 14 al 15 de agosto se celebran los tradicionales fuegos artificiales, un espectáculo pirotécnico que desde el Cerro Santa Catalina llena el cielo de Gijón de palmeras de colores.",
            link: "https://www.cuandopasa.com/index.php?v=v75487d",
            img: "1679688588127-fiestasgijoncartel.jpg",
        },
        {
            title: "Mutua Madrid Open",
            category: "Deportes y Aventura",
            location: "Caja Mágica",
            city: "Madrid",
            province: "Madrid",
            lat: 40.36977334076985,
            long: -3.6860623154753416,
            dtstart: "2023-05-24",
            dtend: "2023-05-07",
            price: 10,
            info: "L@s mejores tenistas del mundo se reúnen de nuevo en la Caja Mágica para la disputa del Mutua Madrid Open que en 2023 celebrará su 21ª edición tras haberse convertido en 2021 en un torneo de dos semanas. Madrid acoge al mismo tiempo, del 24 de abril al 7 de mayo de 2023, el ATP Masters 1000 y WTA Premier Mandatory, el único certamen de esta categoría que se disputa en Europa y con esta duración.\n\nLa edición de 2023 presenta una imagen renovada bajo el lema Reset con una campaña que ha sido ideada por la consultora The NULL. Se ha confirmado que el torneo amplia sus días de competición a 12 en total y el número de jugadores aumenta pasando a 96, que también afecta al cuadro femenino, donde el torneo WTA pasará a contar con 96 jugadoras.",
            link: "https://mutuamadridopen.com/",
            img: "https://res.cloudinary.com/dvf3wmaax/image/upload/v1679989022/multer/mutuaOpenMadrid.jpg"
        },
        {
            title: "Aquasella 2023",
            category: "Entretenimiento",
            location: "Aquasella Beach",
            city: "Arriondas",
            province: "Asturias",
            lat: 43.3938323968393,
            long: -5.176271842328001,
            dtstart: "2023-08-17",
            dtend: "2023-08-20",
            price: 90,
            info: "El Aquasella 2023 ya tiene fechas oficiales. El festival tendrá lugar en El Merediz (Cangas de Onís), muy cerca de la localidad asturiana de Arriondas, los días 17, 18, 19 y 20 de agosto. El Aquasella llega a su 26ª edición en plena forma, después de cerrar su primera edición post-pandemia batiendo récords de asistencia con más de 40.000 personas de más de 10 países diferentes.\n\nPara esta nueva edición el festival está preparando un cartel de más de 80 artistas que pasarán por sus tres escenarios: 999999999, Vitalic, ANNA, I Hate Models, Patrick Mason, Sama Abdulhadi, Oscar Mulero, Ben Klock, Ellen Allien, Horse Meat Disco, Nico Moreno, Planetary Assault Systems Live aka Luke Slater, Eats Everything, Fleur Shore, Richie Hawtin, Dj Plant Texture, Lee Ann Roberts, Paula Tape, Redhead, Technasia, Syreeta Wright, SHDW & Obscure Shape, Trym, Charlie Sparks, Fatima Hajji, Kiddy Smile o Parfait entre otros.",
            link: "https://aquasella.com/",
            img: "https://res.cloudinary.com/dvf3wmaax/image/upload/v1679825298/multer/aquasella_2.jpg",

        }
        


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