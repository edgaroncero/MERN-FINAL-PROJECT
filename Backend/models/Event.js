const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema(
    {
        id: { type: String },
        title: { type: String, required: true },
        category: {type: String, enum: ['Socio Cultural', 'Entretenimiento', 'Gastronomia', 'Deportes y Aventuras', 'Actividades Infantiles', 'Belleza y Bienestar', 'Educativos']},
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

/* // função para converter data de "yyyy-mm-dd" para "dd-mm-yyyy"
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}-${month}-${year}`;
}

eventSchema.pre('save', function(next) {
    this.dtstart = formatDate(this.dtstart);
    this.dtend = formatDate(this.dtend);
    next();
}); */
    
const Event = mongoose.model('Event', eventSchema);
module.exports = Event;