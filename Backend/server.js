const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { UserModal, userValidationSchema } = require('./modeles/user.js');
const AsapModal = require('./modeles/ThingsToDo.js'); // Check this line
const routes = require('./routes.js');
const Joi = require("joi");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// MongoDB URI for UserModal
const userModalURI = "mongodb+srv://yashasnaidu3:yashas3@cluster0.gll0see.mongodb.net/Cites?retryWrites=true&w=majority&appName=Cluster0";
// MongoDB URI for AsapModal
const asapModalURI = "mongodb://localhost:27017/asapmodal"; // Update this with your actual database name for AsapModal

// Connect to MongoDB for UserModal
async function connectToUserDB() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(userModalURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`Connected to UserModal DB at ${userModalURI}`);
    } else {
        console.log(`Already connected to UserModal DB at ${userModalURI}`);
    }
}

// Connect to MongoDB for AsapModal
async function connectToAsapDB() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(asapModalURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`Connected to AsapModal DB at ${asapModalURI}`);
    } else {
        console.log(`Already connected to AsapModal DB at ${asapModalURI}`);
    }
}

// Define routes for UserModal
app.get('/getusers', async (req, res) => {
    try {
        const users = await UserModal.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/getusers/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserModal.findById(id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/updateUsers/:id', async (req, res) => {
    const id = req.params.id;
    console.log(req.body,id);
    try {
        const { name, email, age, password, places } = req.body; // Extract places from the request body

        const updatedUser = await UserModal.findByIdAndUpdate(
            id,
            req.body , // Add place and experiences to visitedPlaces array using $addToSet
            { new: true }
        );
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.delete('/deleteUsers/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const deletedUser = await UserModal.findByIdAndDelete(userId);
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a cookie when a user logs in
app.post("/login", async (req, res) => {
    try {
        // Assuming your login logic involves checking credentials
        const { email, password } = req.body;
        
        // Find the user in the MongoDB database
        const user = await UserModal.findOne({ email, password });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate a token for the user
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

        // Set a cookie with the token
        res.cookie('token', token, { httpOnly: true });

        res.json({ message: 'Login successful', user , token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/createUser", async (req, res) => {
    try {
        // Validate input using Joi
        const { error } = userValidationSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const newUser = await UserModal.create(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Define routes for AsapModal
app.use("/main", routes);

app.get("/", async (req, res) => {
    try {
        const asapModels = await AsapModal.find();
        console.log(asapModels);
        res.json(asapModels);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Connect to databases and start the servers
Promise.all([connectToUserDB(), connectToAsapDB()]).then(() => {
    const userModalServer = app.listen(3001, () => {
        console.log("Server is running on port 3001 for UserModal");
    });

    const asapModalServer = app.listen(3000, () => {
        console.log("Server is running on port 3000 for AsapModal");
    });
});

module.exports = app;
