require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3010;
const mongoURI = process.env.MONGO_URI;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to database'))
  .catch(err => console.error(Error connecting to database: ${err.message}));

app.get('/', (req, res) => {
  res.send('Customer Management System Backend');
});

app.listen(port, () => {
  console.log(Server running at http://localhost:${port});
});
