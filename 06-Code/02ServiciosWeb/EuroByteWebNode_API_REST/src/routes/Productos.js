const express = require("express");
const productoSchema = require("../models/Productos");

const router = express.Router();

// POST (create products)
router.post("/productos", (req, res) => {
  const producto = productoSchema(req.body);
  console.log("producto agregado");
  console.log(req.body);
  producto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// GET ALL
router.get("/productos", (req, res) => {
  productoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// GET ONE
router.get("/productos/:id", (req, res) => {
  const { id } = req.params;
  productoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// DELETE 
router.delete("/productos/:id", (req, res) => {
  const { id } = req.params;
  console.log("producto eliminado");
  productoSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// UPDATE 
router.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, quantity, price, total, profit } = req.body;
  productoSchema
    .updateOne({ _id: id }, { $set: { name, description, quantity, price, total, profit } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;