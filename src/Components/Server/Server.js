const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/posts', require('./routes/posts'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
fetch('/api/posts')
  .then(response => response.json())
  .then(data => {
    // Handle data in your React component
  })
  .catch(error => console.error('Error:', error));
