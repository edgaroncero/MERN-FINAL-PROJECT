const mongoose = require('mongoose');
const User = require('../models/User');
const { DB_URL } = require('../utils/db');

const users = [
    {
        name: "Carlos",
        email: "carlos@gmail.com",
        password: "$2b$10$Kdy3u2WoFZySbwacqhDgLOYcTtx24JOeNkviCNqXQwL4EzYsPwjCO",
        lastname: "Gutiérrrez",
        birth: "1989-04-13",
        city: "Alcalá de Henares",
        isAdmin: false,
        img: "https://res.cloudinary.com/dvf3wmaax/image/upload/v1679822310/sj18fsjxy8ymp1fu3xqo.jpg"
    },
    {
        name: "Mabel",
        lastname: "Campomanes",
        city: "Mieres",
        birth: "1986-12-31",
        email: "bymarshell@msn.com",
        password: "$2b$10$myBUKtC9tbQrUWeVglCyd.T6zzd2cv1QBNtThoM6uJe5Qxyx0yEN6",
        isAdmin: false,
        img: "https://res.cloudinary.com/dvf3wmaax/image/upload/v1679822843/oqq3t4vcqppizsmx8eh4.jpg",

    },
    {
        name: "Bruce",
        lastname: "Wayne",
        city: "Alcalá de Henares",
        birth: "1989-04-13",
        email: "batman@gmail.com",
        password: "$2b$10$3pLNv4YqEcqLR5AOrsUTIOMqc6tco6zhmTf/465r09q9M0t/oXbRu",
        isAdmin: true,
    }
];


const userDocuments = users.map(user => new User(user));

mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
      const allUsers = await User.find();
          if (allUsers.length) {
            await User.collection.drop();
          }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
          await User.insertMany(userDocuments);
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());