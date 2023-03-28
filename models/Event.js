const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema(
    {
        id: { type: String },
        title: { type: String, required: true },
        category: {type: String, enum: ['Socio Cultural', 'Entretenimiento', 'Gastronomía', 'Deportes y Aventura', 'Actividades Infantiles', 'Belleza y Salud', 'Educación']},
        location: {type: String },
        city: {type: String },
        province: {type: String},
        lat: {type: Number },
        long: {type: Number },
        dtstart: {type: String },
        dtend: {type: String },
        price: { type: Number },
        info: { type: String },
        link: { type: String },
        artist: { type: String },
        img: { type: String },
        users: [{ type: mongoose.Types.ObjectId, ref: 'User'}]
    },
    {
        timestamps: true,
    }
);

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;