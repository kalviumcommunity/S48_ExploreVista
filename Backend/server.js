const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');
const cors = require('cors');
const app = express();
const port = 3001;
const localModal = require('./models/ThingsToDo.js');
async function Connection() {
  try {
    await mongoose.connect(
      "mongodb+srv://yashasnaidu3:King%402005@cluster0.gll0see.mongodb.net/yourDatabaseName"
    );
    
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err.message);
  }
}
app.use(cors())
app.use(express.json());
app.use('/api', routes);
app.get("/", (req, res) => {
  res.json({ message: "pong" });
});

app.get("/getlocal", (req, res) => {
  localModal.find()
  .then(vehicle => res.json(vehicle))
  .catch(err => res.json(err)) 
});

Connection().then(() => {
  app.listen({port}, () => {
    console.log("connected to port");
  });
});

module.exports = app;