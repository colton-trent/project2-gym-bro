const express = require('express');
const router = express.Router();
const journalsCtrl = require('../controllers/journals');

router.get('/:id', journalsCtrl.show);
router.delete('/:id', journalsCtrl.delete);

module.exports = router;