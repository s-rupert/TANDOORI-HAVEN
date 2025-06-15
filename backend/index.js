const express = require('express');
const http = require('http');
const app = require('./app');
require('dotenv').config();

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
