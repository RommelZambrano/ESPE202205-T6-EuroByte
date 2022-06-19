const express = require('express');
const usuariosSchema = require("../models/Usuarios");

const router = express.Router();

// create user
// Ismael Salazar

// POST (create users)
router.post("/usuarios", (req, res) => {
    const usuario = usuariosSchema(req.body);
    console.log("Usuario agregado");
    console.log(req.body);
    usuario
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // GET ALL
  router.get("/usuarios", (req, res) => {
    usuariosSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // GET ONE
  router.get("/usuarios/:ci", (req, res) => {
    const { ci } = req.params;
    usuariosSchema
      .findOne({ci})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // DELETE 
  router.delete("/usuarios/:ci", (req, res) => {
    const { ci } = req.params;
    console.log("Usuario eliminado");
    usuariosSchema
      .remove({ ci: ci })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // UPDATE 
  router.put("/usuarios/:ci", (req, res) => {
    const { name, lastname, address, ci } = req.body;
    usuariosSchema
      .updateOne({ ci: req.params.ci }, { $set: { name, lastname, address, ci} })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;