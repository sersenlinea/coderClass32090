const { Router } = require('express');
const router = Router();

const products = require('../contenedor')

router.get('/', (req, res) => {
  res.render('form.handlebars',{ products: products.getAll() });
});

router.get('/productos', (req, res) => {
  res.render('products.handlebars', { products: products.getAll() });
});

router.post('/productos', (req, res) => {
  products.save(req.body)
  res.redirect('/productos');
});

module.exports = router;
