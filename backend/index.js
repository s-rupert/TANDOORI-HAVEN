const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

app.get('/api/reviews/:placeId', async (req, res) => {
  const { placeId } = req.params;
  try {
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/place/details/json',
      {
        params: {
          place_id: placeId,
          fields: 'name,rating,reviews',
          key: API_KEY,
        },
      }
    );

    if (response.data.status === 'OK') {
      res.json(response.data.result.reviews || []);
    } else {
      res.status(400).json({ error: response.data.status });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
