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
module.exports=mongoose.model('Proveedor',proveedorSchema,'Proveedor')