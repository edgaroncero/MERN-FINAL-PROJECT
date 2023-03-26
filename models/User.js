const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: { type: String},
        lastname: {type: String },
        city: {type: String },
        birth: {type: String},
        email: { type: String, required: true },
        password: {type: String,  required: true},
        isAdmin: { type: Boolean },
        img: { type: String },
        events: [{ type: mongoose.Types.ObjectId, ref: 'Event'}]
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;