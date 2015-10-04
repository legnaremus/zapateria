var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/registrar', function (req, res, next) {
    res.render('registrar', {
      title: 'Registrar Producto'
    });
});
