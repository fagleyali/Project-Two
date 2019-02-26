var express = require('express');
var router = express.Router();
var usersCtrl=  require('../controllers/users');
var destinationsCtrl = require('../controllers/destinations');

/* GET users listing. */
router.get('/', destinationsCtrl.index);

module.exports = router;