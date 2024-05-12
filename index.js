const express = require('express');
const app = express();
const articlesRouter = require('./routes/articles');

// Middleware
app.use(express.json());

// Routes
app.use('/articles', articlesRouter);

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
