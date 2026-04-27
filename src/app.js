const express = require('express');
const app = express();

app.use(express.json());

const postRoutes = require('./routes/postRoutes');

app.use('/posts', postRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('DevConnect API Running');
});

// Error handler (END me)
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
});

module.exports = app;