
var controller = require('./email.controller');
var express = require('express');

var router = express.Router();

router.post('/', controller.send);

module.exports = router;
