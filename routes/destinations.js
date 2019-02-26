var express = require('express');
var router = express.Router();
var destinationsCtrl=  require('../controllers/destinations')

/* GET users listing. */
router.get('/', destinationsCtrl.index);
router.get('/new', destinationsCtrl.new);
router.post('/', destinationsCtrl.create);
router.get('/:id',destinationsCtrl.show)




module.exports = router;
