const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    rating: Number,
    ingredients: String,
    image: String,
    id: String
});

module.exports = mongoose.model('menuoptions', menuItemSchema);
