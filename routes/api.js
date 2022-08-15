var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
var classifyController = require('../controllers/classify');
var articleController = require('../controllers/article');

router.post('/login',userController.login);

router.get('/user',userController.index);
router.post('/user',userController.insert);
router.put('/user/:id',userController.update);
router.delete('/user/:id',userController.delete);

router.get('/classify',classifyController.index);
router.post('/classify',classifyController.insert);
router.put('/classify/:id',classifyController.update);
router.delete('/classify/:id',classifyController.delete);

router.get('/article',articleController.index);
router.get('/article/:id',articleController.show);
router.post('/article',articleController.insert);
router.put('/article/:id',articleController.update);
router.delete('/article/:id',articleController.delete);

module.exports = router;
