const express = require('express');
const app = express();
const breadsController = require('./controllers/breads_controller.js');

require('dotenv').config();
const PORT = process.env.PORT;


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads');
})

// Breads

app.use('/breads', breadsController);

app.listen(PORT);
