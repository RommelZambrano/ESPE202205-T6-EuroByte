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
 router.get("/proveedores/:id",(req,res)=>{
    const{ id }=req.params;
    proveedorSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch ((error)=>res.json({message:error}))
 });
 router.delete("/proveedores/:id",(req,res)=>{
    const{ id }=req.params;
    console.log("Proveedor eliminado");
    proveedorSchema
    .remove ( { _id:id } )
    .then((data)=>res.json(data))
    .catch ((error)=>res.json({message:error}))
 });
 router.put ("/proveedores/:id",(req,res)=>{
    const{ id }=req.params;
    const{ name,city,discount}=req.body;
    proveedorSchema
    .updateOne({_id:id},{$set:{name,city,discount}})
    .then((data)=>res.json(data))
    .catch ((error)=>res.json({message:error}))
 });  
 module.exports = router;  