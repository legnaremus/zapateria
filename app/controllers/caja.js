var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/caja', function (req, res, next) {
	var usu=req.cookies['usuario'];
	if(usu=='undefined')
        res.redirect('/?w=is');
    
    res.render('caja', {
      usuario:usu,	
      title: 'Finanzas'
    });
});
