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
  router.get("/usuarios/:ci", (req, res) => {
    const { ci } = req.params;
    usuarioSchema
      .findById(ci)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // DELETE 
  router.delete("/usuarios/:ci", (req, res) => {
    const { ci } = req.params;
    console.log("Usuario eliminado");
    usuarioSchema
      .remove({ ci: ci })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // UPDATE 
  router.put("/usuarios/:ci", (req, res) => {
    const { ci } = req.params;
    const { name, lastname, address } = req.body;
    usuarioSchema
      .updateOne({ ci:ci }, { $set: { name, lastname, address} })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
module.exports = router;