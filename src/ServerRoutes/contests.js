const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('data for contests page');
});

module.exports = router;
