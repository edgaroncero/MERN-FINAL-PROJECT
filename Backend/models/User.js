const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String },
    surname: { type: String },
    address: { type: String },
    fechaNacimiento: { type: Date, required: true },
    /* imagen: { type: String }, */
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false } // campo del administrador
  },
  {
    timestamps: true,
  }
);

// Setter para formatar fechaNacimiento 'yyyy-mm-dd'
userSchema.path('fechaNacimiento').set(function (date) {
  return date.toISOString().slice(0, 10);
});
const User = mongoose.model('User', userSchema);
module.exports = User;