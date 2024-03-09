const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { UserModal, userValidationSchema } = require('./modeles/user.js');
const AsapModal = require('./modeles/ThingsToDo.js');
const routes = require('./routes.js');
const Joi = require("joi");

const app = express();
app.use(cors());
app.use(express.json());

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
    try {
        const updatedUser = await UserModal.findByIdAndUpdate(
            id,
            { name: req.body.name, email: req.body.email, age: req.body.age, password: req.body.password},
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