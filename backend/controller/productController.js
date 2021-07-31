const Product = require('../models/product');


exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error'});
    }
}

exports.getProduct = async (req, res) => {
    
    try {
        const id = req.params.id
        const product = await Product.findById(id);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error'});
    }
}