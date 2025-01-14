const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// Create an event
router.post('/create', async (req, res) => {
  const { name, date, location, description } = req.body;
  try {
    const newEvent = new Event({ name, date, location, description });
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;