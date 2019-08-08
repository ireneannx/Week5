//this file is for routing requests
const express = require('express')
const customers = require('../controllers/customer.controller.js');
router = express.Router();

//create a new customer
router.post('/customers', customers.create)

//find all customers
router.get('/customers', customers.findAll)

//retrieve a particular customer by ID
router.get('/customers/:id', customers.findOne)

module.exports = router
