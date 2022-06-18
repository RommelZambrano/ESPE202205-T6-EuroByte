const mongoose = require ("mongoose");

const metodoPagoSchema = mongoose.Schema ({
    typepague : {
        type: String, 
        required: true
    },

    quantity : {
        type: Number,
        required: true
    }

})

metodoPagoSchema.set("toJSON",{
    virtuals: false,     
     versionKey: false, 
     transform: (doc, ret) => {
      delete ret._id;
  }
});

module.exports=mongoose.model ('Metodo de Pago', metodoPagoSchema, 'Metodo de Pago')