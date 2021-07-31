const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    },
    price: {
        type: Number, required: true
    },
    numInStock: {
        type: Number, require: true
    },
    imageUrl: {
        type: String, require: true
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product