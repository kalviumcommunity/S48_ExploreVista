const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

// MongoDB connection URL
const mongoURI = 'mongodb://localhost:27017'; // Update with your MongoDB URI

// Database Name
const dbName = 'your-database-name'; // Update with your database name

// MongoDB client instance
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
async function connectToMongo() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

// Call the connectToMongo function to establish connection
connectToMongo();

// Create
router.post('/create', async (req, res) => {
  try {
    const db = client.db(dbName);
    // Perform create operation
    res.json({ message: 'Data created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to create data' });
  }
});

// Read
router.get('/read', async (req, res) => {
  try {
    const db = client.db(dbName);
    // Perform read operation
    res.json({ message: 'Data read successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to read data' });
  }
});

// Update
router.put('/update', async (req, res) => {
  try {
    const db = client.db(dbName);
    // Perform update operation
    res.json({ message: 'Data updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to update data' });
  }
});

// Delete
router.delete('/delete', async (req, res) => {
  try {
    const db = client.db(dbName);
    // Perform delete operation
    res.json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete data' });
  }
});

module.exports = router;
