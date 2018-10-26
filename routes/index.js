var express = require('express');
var router = express.Router();
const path = require('path')

/* GET home page. */
router.get('/', (req, res) => {
  console.log(req.header)
  res.sendFile(path.resolve(__dirname, './index.html'))
})

module.exports = router;
