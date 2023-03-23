const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema(
    {
        id: { type: Number },
        title: { type: String, required: true },
        category: {type: String },
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
        
    },
    {
        timestamps: true,
    }
);

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;