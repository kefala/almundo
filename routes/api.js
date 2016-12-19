var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.send("work");
});

router = require('./hotel')(router);

module.exports = router;