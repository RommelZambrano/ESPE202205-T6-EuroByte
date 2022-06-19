const express = require("express")
const proveedorSchema = require("../models/Proveedor")
const router = express.Router();

 router.post("/proveedores",(req,res)=>{
    const proveedor = proveedorSchema(req.body) 
    console.log("Proveedor agregado")
    console.log(req.body)
    proveedor 
    .save()
    .then((data)=>res.json(data))
    .catch ((error)=>res.json({message:error}))
 });  
 router.get("/proveedores",(req,res)=>{
    proveedorSchema
    .find()
    .then((data)=>res.json(data))
    .catch ((error)=>res.json({message:error}))

 });
 router.get("/proveedores/:name",(req,res)=>{
    const{ name  }=req.params;
    proveedorSchema
    .findOne(name)
    .then((data)=>res.json(data))
    .catch ((error)=>res.json({message:error}))
 });
 router.delete("/proveedores/:name",(req,res)=>{
    const{ name }=req.params;
    console.log("Proveedor eliminado");
    proveedorSchema
    .remove ( { name } )
    .then((data)=>res.json(data))
    .catch ((error)=>res.json({message:error}))
 });
 router.put ("/proveedores/:name",(req,res)=>{
    const{ name,city,discount}=req.body;
    proveedorSchema
    .updateOne({name : req.params.name},{$set:{name,city,discount}})
    .then((data)=>res.json(data))
    .catch ((error)=>res.json({message:error}))
 });  
 module.exports = router;  