const mongoose = require("mongoose");
const uniqueValidate = require('mongoose-unique-validator')

const usuariosSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  ci: {
    type: Number,
    unique: true
  }
});

usuariosSchema.set('toJSON', {
  virtuals: true,     
  versionKey: false, 
  transform: (doc, ret) => {
    delete ret._id;
  }
});

usuariosSchema.pluggin(uniqueValidate)
module.exports = mongoose.model('Usuarios', usuariosSchema, 'Usuarios');