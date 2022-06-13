const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();


const app = express();
const port = process.env.PORT || 2000;


// routes
app.get('/', (req, res)=> {
    res.send("Welcome to my API"); 
});

// mongoDB connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to mongoDB Atlas'))
    .catch((error) => console.error('Error to connected to mongoDB Atlas'))

app.listen(port, () => console.log('server listening on port', port));


