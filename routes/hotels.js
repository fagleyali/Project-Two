var express = require('express');
var router = express.Router();

var hotelCtrl = require('../controllers/hotels');

router.get('/:id/hotels', hotelCtrl.index);

module.exports= router;
