var express = require('express');
var router = express.Router();

// Require controller modules.
var board_controller = require('../controllers/boardController');


/// Board ROUTES ///

// GET boards index home page.
router.get('/', board_controller.index);

router.get('/whitecats', board_controller.white_cats);

router.get('/blackcats', board_controller.black_cats);

router.get('/greycats', board_controller.grey_cats);

router.get('/orangecats', board_controller.orange_cats);

router.get('/tabbycats', board_controller.tabby_cats);



module.exports = router;