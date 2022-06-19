const mongoose=require("mongoose")
const proveedorSchema=mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    city: {
        type:String,
        required:true
    },
    discount: {
        type:Number,
        required:true
    }
})

proveedorSchema.set("toJSON",{
    virtuals: false,     
     versionKey: false, 
     transform: (doc, ret) => {
      delete ret._id;
  }
});

module.exports=mongoose.model('Proveedor',proveedorSchema,'Proveedor')