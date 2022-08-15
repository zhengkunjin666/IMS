var express = require('express');
var router = express.Router();
var articleController = require('../controllers/controller/article');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/article',articleController.index);
router.get('/article/show/:id',articleController.show);

module.exports = router;
