var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hbs', function(req, res, next) {
  res.render('index', {
     title: 'Express',
     nombre:"Luis",
     apellido:"Navas",
     edad:49,
     telefono:11703998220,
     email:'lpipnavas@gmail.com'
    });
});

module.exports = router;
