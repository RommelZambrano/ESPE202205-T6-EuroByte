const mongoose = require("mongoose");
const { Schema } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

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

usuariosSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Usuarios', usuariosSchema, 'Usuarios');