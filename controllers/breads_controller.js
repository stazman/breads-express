const express = require('express');
const router = express.Router();
const Bread = require('../models/bread.js');



// INDEX
router.get('/', (req, res) => {
  res.render('index', {
    breads: Bread,
    title: "Welcome to BreadCRUD!"
  })
})

module.exports = router

// SHOW
router.get('/:arrayIndex', (req, res) => {
  res.send(Bread[req.params.arrayIndex])
})