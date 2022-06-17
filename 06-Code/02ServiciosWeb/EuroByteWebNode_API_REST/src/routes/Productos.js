const express = require("express");
const productoSchema = require("../models/Productos");

const router = express.Router();

// post (create productos)
router.post("/productos", (req, res) => {
  const producto = productoSchema(req.body);
  console.log("producto agregado");
  console.log(req.body);
  producto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all
router.get("/productos", (req, res) => {
  productoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get
router.get("/productos/:name", (req, res) => {
  const { name } = req.params;
  productoSchema
    .findOne({name})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete 
router.delete("/productos/:name", (req, res) => {
  const { name } = req.params;
  console.log("producto eliminado");
  productoSchema
    .remove({ name: name })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// put  (update) 
router.put("/productos/:name", (req, res) => {
  const { name, description, quantity, price, total, profit } = req.body;
  productoSchema
    .updateOne({ name: req.params.name }, 
               { $set: { name, 
                         description,   
                         quantity, 
                         price, 
                         total, 
                         profit } 
              })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;
