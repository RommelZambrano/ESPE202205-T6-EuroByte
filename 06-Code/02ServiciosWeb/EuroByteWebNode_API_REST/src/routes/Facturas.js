const express = require('express');
const facturasSchema = require('../models/Facturas');
const router = express.Router();


// create user
//Brandon

//post
router.post("/facturas", (req, res) => {
  const facturas = facturasSchema(req.body);
  console.log("creada");
  console.log(req.body);
  facturas
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all
router.get("/facturas", (req, res) => {
  facturasSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get one
router.get("/facturas/:name", (req, res) => {
    const { name } = req.params;
    facturasSchema
      .findOne({name})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

// delete 
router.delete("/facturas/:name", (req, res) => {
  console.log("factura eliminada");
  facturasSchema
    .remove({ name: req.params.name })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update 
router.put("/facturas/:name", (req, res) => {
  const { name, description, total } = req.body;
  facturasSchema
    .updateOne({ name: req.params.name }, { $set: { name, description, total } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
