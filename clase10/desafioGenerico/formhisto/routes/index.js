var express = require('express');
var router = express.Router();

let personas=[];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',personas:personas});
});

router.post('/personas', function(req, res, ) {
  let datos = req.body;
  personas=[...personas,datos]
  res.render('index', { title: 'Express',personas:personas});
});

module.exports = router;
