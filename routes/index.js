const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Tic Tac Toe server.' });
});

module.exports = router;
