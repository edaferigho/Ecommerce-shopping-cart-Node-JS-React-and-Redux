const express = require('express');
const productController  = require('../controller/productController');



const Router = express.Router();
//@desc GET  all products from db
//@route GET /api/products
//@access Public
Router.get('/',productController.getAllProducts)

//@desc GET  a product by id
//@route GET /api/products
//@access Public
Router.get('/:id',productController.getProduct)
module.exports = Router