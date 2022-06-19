const mongoose = require("mongoose");

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
    required: unique
  }
});

usuariosSchema.set('toJSON', {
  virtuals: true,     
  versionKey: false, 
  transform: (doc, ret) => {
    delete ret._id;
  }
});

module.exports = mongoose.model('Usuarios', usuariosSchema, 'Usuarios');