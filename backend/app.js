const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const insertMenuData = require('./db/datainsertion');
const menuoptions = require('./models/menuItems');
const userRoutes = require('./routes/user.route');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


app.get('/menu', async (req, res) => {
  try {
    const items = await menuoptions.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to Tandoori Haven!');
});
app.use('/users', userRoutes);

module.exports = app;