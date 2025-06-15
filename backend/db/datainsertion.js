const mongoose = require('mongoose');
const connectToDb = require('./db');
const path = require('path');

const menuItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    rating: Number,
    ingredients: String,
    image: String,
    id: String
});

const MenuItem = mongoose.model('Menuoptions', menuItemSchema);

async function insertMenuData() {
    try {
        await connectToDb();  // This connects to MongoDB via Mongoose
        const menuData = require(path.join(__dirname, 'Sweets&desserts.json'));
        
        const result = await MenuItem.insertMany(menuData);
        console.log(`${result.length} documents inserted.`);
    } catch (err) {
        console.error("Error inserting data:", err);
    }
}

// insertMenuData();


// module.exports = insertMenuData;
