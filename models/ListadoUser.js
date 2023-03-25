/* const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const researchSchema = new Schema(
  {
    name: { type: String, required: true },//La propiedad required hace que el campo sea obligatorio
    apellidos: { type: String, required: true },
		ubicacion: { type: String, required: true },
		fechaNacimiento: { type: String, required: true },
    email: { type: String, required: true },
		imagen: { type: String },
    picture: { type: String },
  },
  {
    // Esta propiedad servirá para guardar las fechas de creación y actualización de los documentos
    timestamps: true,
  }
);

// Creamos y exportamos el modelo Research
const ListadoUser = mongoose.model('ListadoUser', researchSchema);
module.exports = ListadoUser;

 */