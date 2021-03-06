const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');

router.get('/', exercisesCtrl.index);
router.get('/new', exercisesCtrl.new);
router.get('/:id', exercisesCtrl.show);
router.post('/', exercisesCtrl.create);
router.get('/:id/edit', exercisesCtrl.edit);
router.put('/:id', exercisesCtrl.update);


module.exports = router;