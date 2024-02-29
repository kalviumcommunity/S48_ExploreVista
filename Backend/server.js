const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModal = require('./modeles/user');
const AsapModal = require('./modeles/ThingsToDo.js');
const routes = require('./routes.js');

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = "mongodb+srv://yashasnaidu3:yashas3@cluster0.gll0see.mongodb.net/Cites?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
async function Connection() {
    await mongoose.connect(mongoURI);
    console.log("connected to the DB");
}

// Define routes for UserModal
app.get('/', async (req, res) => {
    try {
        const users = await UserModal.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/getUser/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserModal.findById(id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/updateUser/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await UserModal.findByIdAndUpdate(
            id,
            { name: req.body.name, email: req.body.email, age: req.body.age },
            { new: true }
        );
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/deleteUser/:id', async (req, res) => {
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

Connection().then(() => {
    app.listen(3000, () => {
        console.log("connected to localhost");
    });
});

module.exports = app;
