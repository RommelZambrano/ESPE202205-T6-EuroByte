const mongoose = require("mongoose");

const facturasSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    
    description: {
        type: String,
        required: true
      },
    total: {
        type: Number,
        required: true
      },
});

facturasSchema.set("toJSON",{
    virtuals: false,     
     versionKey: false, 
     transform: (doc, ret) => {
      delete ret._id;
  }
});

module.exports = mongoose.model('Facturas', facturasSchema, 'Facturas');