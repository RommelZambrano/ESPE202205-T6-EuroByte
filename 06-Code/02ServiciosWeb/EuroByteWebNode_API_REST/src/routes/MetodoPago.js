const express = require ("express")
const metodoPagoSchema = require ("../models/MetodoPago");

const router = express.Router ();
router.post("/metodo",(req, res)=>{
    const metodo = metodoPagoSchema (req.body);
    console.log("Metodo agregado");
    console.log(req.body);
    metodo 
    .save ()
    .then ((data)=>res.json(data))
    .catch ((error)=>res.json({message: error}));
});

router.get ("/metodo",(req, res)=>{
    metodoPagoSchema
    .find()
    .then ((data)=>res.json(data))
    .catch ((error)=>res.json({message: error}));
});

router.get ("/metodo/:id",(req, res)=>{
    const { id } = req.params;
    metodoPagoSchema
    .findOne({ id })
    .then ((data)=>res.json(data))
    .catch ((error)=>res.json({message: error}));
});

router.delete ("/metodo/:id",(req, res)=>{
    const { id } = req.params;
    metodoPagoSchema
    .remove({ _id: id })
    .then ((data)=>res.json(data))
    .catch ((error)=>res.json({message: error}));
});

router.put("/metodo/:id",(req, res)=>{
    const { typepague, quantity } = req.body;
    metodoPagoSchema
    .updateOne({ _id: req.params._id }, 
                {$set:{typepague,
                       quantity}})
    .then ((data)=>res.json(data))
    .catch ((error)=>res.json({message: error}));
});

module.exports = router;

