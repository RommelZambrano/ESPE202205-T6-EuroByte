const express = require('express');
const facturasSchema = require('../models/Facturas');
const router = express.Router();


// create user
//Brandon

router.post("/facturas", (req, res) => {
  const facturas = facturasSchema(req.body);
  console.log("creada");
  console.log(req.body);
  facturas
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/facturas/:name", (req, res) => {
    const { name } = req.params;
    usuariosSchema
      .findByOne(name)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

module.exports = router;