const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({
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
    required: true
  }
});

module.exports = mongoose.model('Usuarios', usuarioSchema, 'Usuarios');