const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String },
    surname: { type: String },
    address: { type: String },
    fechaNacimiento: { type: Date },
    /* imagen: { type: String }, */
    email: { type: String, required: true },
    password: { type: String, required: true },

  },
  {
    timestamps: true,
  }
);

// Setter para formatar a data em 'yyyy-mm-dd'
userSchema.path('fechaNacimiento').set(function (date) {
  return date.toISOString().slice(0, 10);
});
const User = mongoose.model('User', userSchema);
module.exports = User;