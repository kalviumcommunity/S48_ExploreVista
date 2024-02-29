const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const AsapModal = require('./modeles/user');

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = "mongodb+srv://yashasnaidu3:yashas3@cluster0.gll0see.mongodb.net/Cites?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', async (req, res) => {
    try {
        const users = await AsapModal.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/getUser/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await AsapModal.findById(id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/updateUser/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await AsapModal.findByIdAndUpdate(
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
        const deletedUser = await AsapModal.findByIdAndDelete(userId);
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/createUser", async (req, res) => {
    try {
        const newUser = await AsapModal.create(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
