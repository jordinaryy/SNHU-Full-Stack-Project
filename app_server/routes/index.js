const express = require('express');
const router = express.Router();
const ctrlTravlr = require('../controllers/traveller');

router.get('/', ctrlTravlr.home);

module.exports = router;

