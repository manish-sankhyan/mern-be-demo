// === Backend (Node.js + Express) ===
// File: backend/index.js

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
