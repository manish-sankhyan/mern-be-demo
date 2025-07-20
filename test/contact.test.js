// === Jest Config for BE ===
// File: backend/test/contact.test.js

const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.json());
app.post('/api/contact', (req, res) => {
  res.status(200).json({ success: true, message: 'Contact submitted successfully' });
});

describe('POST /api/contact', () => {
  it('should respond with success message', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({ name: 'Test', email: 'test@example.com', message: 'Hello' });

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
  });
});
