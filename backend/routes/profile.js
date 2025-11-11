const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Get profile data
router.get('/', async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update profile data
router.put('/', async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate({}, req.body, { 
      new: true, 
      upsert: true,
      runValidators: true 
    });
    res.json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;



