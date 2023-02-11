const path = require('path');

const express = require('express');

const producstsController=require('../controllers/products')
const adminData = require('./admin');

const router = express.Router();

router.get('/', producstsController.getProducts);

module.exports = router;
