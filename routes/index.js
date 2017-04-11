var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.json({ message: 'Welcome to the Tic Tac Toe server.' });
});

module.exports = router;
