const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/taskdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Password Schema
const passwordSchema = new mongoose.Schema({
    website: String,
    username: String,
    password: String
});

const Password = mongoose.model('Password', passwordSchema);

// Routes

// Get all saved passwords
app.get('/passwords', async (req, res) => {
    try {
        const passwords = await Password.find();
        res.json(passwords);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching passwords' });
    }
});

// Add a new password
app.post('/passwords', async (req, res) => {
    try {
        console.log(req.body);
        const { website, username, password } = req.body;
        const newPassword = new Password({ website, username, password });
        await newPassword.save();
        res.status(201).json(newPassword);
    } catch (error) {
        res.status(500).json({ message: 'Error saving password' });
    }
});

// Delete a password
app.delete('/passwords/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        await Password.findByIdAndDelete(req.params.id);
        res.json({ message: 'Password deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting password' });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

