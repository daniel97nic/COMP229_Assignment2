const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');

// Create a new product
router.post('/products', ProductController.createProduct);

// Get all products
router.get('/products', ProductController.getAllProducts);

// Get product by ID
router.get('/products/:id', ProductController.getProductById);

// Update product by ID
router.put('/products/:id', ProductController.updateProduct);

// Delete product by ID
router.delete('/products/:id', ProductController.deleteProduct);

module.exports = router;
