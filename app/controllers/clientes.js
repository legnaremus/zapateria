var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/clientes', function (req, res, next) {
    res.render('clientes', {
      title: 'Clientes & Creditos'
    });
});
