const express = require('express');
const app = express();

app.use(express.json());

const postRoutes = require('./routes/postRoutes');

app.use('/posts', postRoutes);


app.get('/', (req, res) => {
  res.send('DevConnect API Running');
});


app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
});

module.exports = app;
