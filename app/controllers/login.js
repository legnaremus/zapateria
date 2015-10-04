var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
  
};

router.get('/', function (req, res, next) {
	var e= req.query.w, m;
	console.log(e);
	if(e=="ru")
		m="Usuario Incorrecto";
	if(e=="rp")
		m="Contraseña Incorrecta";
  res.render('login', {
    mensaje: m ,
    title: 'Inicio de Sesion'
  });  
});
