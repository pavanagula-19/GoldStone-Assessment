const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define User schema
const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  gender: String,
  status: String,
  createdAt: Date,
  updatedAt: Date,
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());

// Fetch user data from GoRest API and store in database
app.get('/api/fetch-users', async (req, res) => {
  try {
    const response = await axios.get('https://gorest.co.in/public-api/users', {
      headers: {
        Authorization: 'd764c5a41984d783fa5dcfa4ca5409eef6e5af562183155a6e5b0f082d2fa1cb',
      },
    });

    const users = response.data.result;

    // Save users to the database
    await User.insertMany(users);

    res.status(200).json({ message: 'Users fetched and stored successfully.' });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });
  }
});

// Update user data in the database
app.put('/api/update-user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, gender, status } = req.body;

    // Find the user by ID and update the fields
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, gender, status },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'An error occurred while updating the user.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
