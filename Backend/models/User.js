const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        id: { type: String },
        name: { type: String},
        location: {type: String },
        city: {type: String },
        province: {type: String},
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;