const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');

router.post('/exercises/:id/workouts', workoutsCtrl.create);

module.exports = router;