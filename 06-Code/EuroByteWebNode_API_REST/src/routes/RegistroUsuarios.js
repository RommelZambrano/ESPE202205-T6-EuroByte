const express = require('express');
const usuarioSchema = require("../models/RegistroUsuarios");


const router = express.Router();

// create user
// Ismael Salazar

// POST (create users)
router.post("/usuarios", (req, res) => {
    const usuario = usuarioSchema(req.body);
    console.log("Usuario agregado");
    console.log(req.body);
    usuario
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // GET ALL
  router.get("/usuarios", (req, res) => {
    usuarioSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // GET ONE
  router.get("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    usuarioSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // DELETE 
  router.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    console.log("Usuario eliminado");
    usuarioSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // UPDATE 
  router.put("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { name, lastname, address, ci } = req.body;
    usuarioSchema
      .updateOne({ _id: id }, { $set: { name, lastname, address, ci} })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
module.exports = router;