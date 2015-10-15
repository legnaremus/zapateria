var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
  
};

router.get('/', function (req, res, next) {
	var e= req.query.w, m;
  res.cookie('usuario','undefined');
	console.log(e);
	if(e=="ru")
		m="Usuario Incorrecto";
	if(e=="rp")
		m="Contraseña Incorrecta";
  if(e=='is')
    m="Debes iniciar Sesion"
  res.render('login', {
    mensaje: m ,
    title: 'Inicio de Sesion'
  });  
});
