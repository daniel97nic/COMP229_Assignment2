const Product = require('../models/product.model');

const ProductController = {
  createProduct: async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (product) {
        res.status(200).json({ message: 'Product deleted successfully' });
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteAllProducts: async (req, res) => {
    try {
      const product = await Product.deleteMany({});
      if (product) {
        res.status(200).json({ message: 'Products deleted successfully' });
      } else {
        res.status(404).json({ error: 'Products not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getProductByName: async (req, res) => {
    try {
      const partialProductName = req.query.name;
      const products = await Product.find({ name: { $regex: partialProductName, $options: 'i' } });
      
      if (products.length > 0) {
        res.status(200).json(products);
      } else {
        res.status(404).json({ error: 'No products found with the provided partial name parameter.' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = ProductController;
