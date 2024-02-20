const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = process.env.PUBLIC_PORT || 3000;

// MongoDB connection URL from the environment variable
const mongoURL = process.env.MONGO_URL;

// Connect to MongoDB
MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  // Database name
  const dbName = process.env.MONGO_DB_NAME;

  // Access the database
  const db = client.db(dbName);

  // Define the route for /ping with the response in JSON
  app.get('/ping', async (req, res) => {
    try {
      // Example MongoDB query
      const result = await db.collection('yourCollection').find({}).toArray();
      res.json({ message: 'pong', mongoData: result });
    } catch (error) {
      console.error('Error querying MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Additional routes and middleware can be added here

  // Start the server
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
});

module.exports = app;
