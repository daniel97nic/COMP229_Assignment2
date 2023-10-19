const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');

// Create a new product
router.post('/products', ProductController.createProduct);

// Get product by ID
router.get('/products/:id', ProductController.getProductById);

//Get product by partial name
router.get('/products', ProductController.getProductByName);

// Get all products
router.get('/products', ProductController.getAllProducts);

// Update product by ID
router.put('/products/:id', ProductController.updateProduct);

// Delete product by ID
router.delete('/products/:id', ProductController.deleteProduct);

// Delete all products
router.delete('/products', ProductController.deleteAllProducts);

module.exports = router;
