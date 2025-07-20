// File: index.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Sample "Contact Us" API endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Contact submission received:', {
    name,
    email,
    message
  });

  res.status(200).json({
    success: true,
    message: 'Contact submitted successfully'
  });
});

// Basic health check
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
