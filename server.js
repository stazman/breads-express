const express = require('express');
const app = express();
const breadsController = require('./controllers/breads_controller.js');

require('dotenv').config();
const PORT = process.env.PORT;


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads');
})

// Breads

app.use('/breads', breadsController);

app.listen(PORT);
