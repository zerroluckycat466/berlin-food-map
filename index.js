const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB-Verbindung
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/berlin_food_map', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden'))
  .catch(err => console.log(err));

// API-Routen
app.get('/api/restaurants', (req, res) => {
  // Hier sollte die Logik zum Abrufen der Restaurants stehen
  res.json({ message: 'Liste der Restaurants' });
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});